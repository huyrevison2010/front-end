import React from 'react';
import * as Yup from 'yup'

import tron from "../tron/tron";
import { getLocaleKey, translate } from "../../languages";
import { useForm } from "../../modules/form";
import { ObjectUtils } from "../../modules/utils";
import { getClientStore, useSelector } from "../../store";
import { TCoin, TCoinInvest } from "../../types";
import { SET_WALLET_BALANCES } from "../main/walletBalances.reducer";
import { TronService } from "../tron/tron.service";
import { SET_WALLET_TOTAL_PAYOUTS } from "./walletTotalPayouts.reducer";
import { clearIntervalAsync, setIntervalAsync } from 'set-interval-async/fixed';
import { OnModalConfirmation } from '../../components/modal-confirmation';
import { CreateAlert } from '../../modules/alert';
import { MainService } from '../main';
import { CookieService, ECookieVariable } from '../cookie';

export class WalletService {
  static async getWalletBalances() {
    const [USDT, IMD] = await Promise.all([
      tron.balanceOfTether(),
      tron.balanceOfImd(),
    ])

    const walletBalances = {
      USDT: +USDT,
      IMD: +IMD,
    }

    const store = getClientStore();
    store.dispatch({ type: SET_WALLET_BALANCES, data: walletBalances })
  }

  static async getWalletTotalPayouts() {
    const [IDA, IDAA, USDT] = await Promise.all([
      tron.getTotalDailyIncome(),
      tron.getMaturedDailyIncome(),
      tron.getInvestor().then((res: any) => +res['balance'])
    ])

    const walletTotalPayouts = {
      IDA: +IDA,
      IDAA: +IDAA,
      USDT: +USDT,
    }

    const store = getClientStore();
    store.dispatch({ type: SET_WALLET_TOTAL_PAYOUTS, data: walletTotalPayouts });
  }

  static getWalletNameFromId(id: TCoin) {
    if (id === 'IDAA') return 'IDA Available'
    return id
  }

  static coinInvestType: TCoinInvest | '' = '';
  static useInvestForm(state: { onInvestSuccess: () => any }) {
    const investor = useSelector(state => state.investor);
    const isNewUser = !!!ObjectUtils.getIn(investor, 'isInvestorExist', false);
    const invested = ObjectUtils.getIn(investor, 'invested', null);

    const walletBalances = useSelector(state => state.walletBalances);
    const walletBalanceUSDT = ObjectUtils.getIn(walletBalances, 'USDT', 0, amount => TronService.convertCurrencyAmountToShow(amount, 'USDT').toLocaleString(getLocaleKey()))
    const walletBalanceIMD = ObjectUtils.getIn(walletBalances, 'IMD', 0, amount => TronService.convertCurrencyAmountToShow(amount, 'IMD').toLocaleString(getLocaleKey()))

    const { getInputProps, handleSubmit, isSubmitting } = useForm({
      enableReinitialize: true,
      structure: [
        {
          name: 'amount',
          validate: Yup.number().required(translate('must-be-provided'))
        },
      ],
      onSubmit: async (values, _, { setFieldValue, setFieldTouched }) => {
        const { amount } = values;
        if (this.coinInvestType === "") return;

        await new Promise(async (resolve) => {
          try {
            const coinAmount = TronService.convertCurrencyShowToAmount(amount, this.coinInvestType as any);
            await TronService.checkIsTronReady();

            // Handle Check Allowance Amount
            if (this.coinInvestType === 'USDT') await tron.approveTether(coinAmount.toString());
            if (this.coinInvestType === 'IMD') await tron.approveIMD(coinAmount.toString());

            await new Promise(async (resolveCheckAllowance, rejectCheckAllowance) => {
              const timeout = 10;
              let timeChecks = 0, interval = setIntervalAsync(async () => {
                if (timeChecks === timeout) {
                  clearIntervalAsync(interval);
                  rejectCheckAllowance(new Error(`${translate('cannot-invest-with')} ${amount} ${this.coinInvestType}`))
                }

                let newAllowance: any;

                if (this.coinInvestType === 'USDT') newAllowance = await tron.allowanceTether();
                if (this.coinInvestType === 'IMD') newAllowance = await tron.allowanceIMD();

                if (+newAllowance === +coinAmount) {
                  clearIntervalAsync(interval);
                  resolveCheckAllowance();
                } else {
                  timeChecks += 1;
                }
              }, 1000)
            })

            // Handle invest
            OnModalConfirmation({
              title: translate('confirmation'),
              content: <p>{translate('you-are-allowed-to-invest')} {amount} {this.coinInvestType}</p>,
              onNext: async () => new Promise(async (resolve) => {
                try {
                  const presenterAddress = CookieService.get(ECookieVariable.USER_REF);
                  const investAmount = amount + "000000000000000000";
                  if (isNewUser) await tron.register(presenterAddress, investAmount.toString(), this.coinInvestType === 'USDT');
                  else await tron.invest(investAmount.toString(), this.coinInvestType === 'USDT');

                  const timeout = 10;
                  let timeChecks = 0, interval = setIntervalAsync(async () => {
                    if (timeChecks === timeout) {
                      clearIntervalAsync(interval);
                      CreateAlert({ type: 'danger', title: 'Error', message: `${translate('cannot-invest-with')} ${amount} ${this.coinInvestType}` })
                      resolve();
                    }

                    const newInvestor: any = await tron.getInvestor();

                    if (+newInvestor['invested'] > +investor['invested']) {
                      await TronService.getInvestor();
                      await MainService.getNumberReports();

                      clearIntervalAsync(interval);
                      CreateAlert({ type: 'success', title: 'Success', message: 'Deposit successful!' });
                      resolve();
                      setFieldValue('amount', '');
                      setFieldTouched('amount', false);
                      state.onInvestSuccess();
                    } else {
                      timeChecks += 1;
                    }
                  }, 1000)
                } catch (error) {
                  CreateAlert({ type: 'danger', title: 'Error', message: error.message });
                  resolve();
                }
              })
            })

            resolve(true);
          } catch (error) {
            console.error(error)
            CreateAlert({ type: 'danger', title: 'Error', message: error.message })
            resolve();
          }
        })
      }
    })

    const amountInputProps = getInputProps('amount');
    const handleSubmitWithCoinType = (coinType: TCoinInvest) => {
      this.coinInvestType = coinType;
      handleSubmit();
    }

    return {
      amountInputProps,
      handleSubmitWithCoinType,
      isSubmitting,
      walletBalanceUSDT,
      walletBalanceIMD,
      invested
    }
  }

  static useWithdrawForm(state: { onWithdrawSuccess: () => any, coin: any }) {
    const walletTotalPayouts = useSelector(state => state.walletTotalPayouts);
    const totalPayout = state ? ObjectUtils.getIn(walletTotalPayouts, state.coin) : 0;

    const { getInputProps, handleSubmit, isSubmitting } = useForm({
      enableReinitialize: true,
      structure: [
        {
          name: 'amount',
          validate: Yup.number().required('Must-be-provided')
            .min(1, translate('error-min-withdraw', { amount: 1 }))
            .max(totalPayout, translate('amount-in-wallet-not-enough'))
        }
      ],
      onSubmit: async (values, _, { setFieldValue, setFieldTouched }) => {
        const { amount } = values;

        if (!state) return;

        try {
          await TronService.checkIsTronReady();
          await new Promise(async (resolve, reject) => {
            if (state.coin === 'USDT') await tron.investorWithdrawTether((amount * 1000000000000000000).toString());
            else if (state.coin === 'IDAA') await tron.investorWithdrawIda((amount * 1000000000000000000).toString());
            else reject(new Error(translate('this-wallet-not-support-withraw')))

            const timeout = 10;
            let timeChecks = 0, interval = setIntervalAsync(async () => {
              if (timeChecks === timeout) {
                clearIntervalAsync(interval);
                reject(new Error(translate('cannot-withdraw')))
              }

              let newTotalPayout: any;
              if (state.coin === 'USDT') newTotalPayout = await tron.getInvestor().then((res: any) => +res['balance']);
              else if (state.coin === 'IDAA') newTotalPayout = await tron.getMaturedDailyIncome();

              if (+newTotalPayout < +totalPayout) {
                clearIntervalAsync(interval);
                setFieldValue('amount', '');
                setFieldTouched('amount', false);

                await WalletService.getWalletBalances();
                CreateAlert({ type: 'success', title: 'Success', message: `${translate('withdraw-successful')}!` });
                state.onWithdrawSuccess();
                resolve(true);
              } else {
                timeChecks += 1;
              }
            }, 1000)
          })
        } catch (error) {
          CreateAlert({ type: 'danger', title: 'Error', message: error.message })
        }
      }
    })

    const amountInputProps = getInputProps('amount')

    return {
      getInputProps,
      handleSubmit,
      isSubmitting,
      totalPayout,
      amountInputProps
    }
  }
}