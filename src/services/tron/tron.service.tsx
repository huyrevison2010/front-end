import tron from "./tron";
import { getEnv } from "../../AppConfig";
import { getClientStore } from "../../store";
import { CookieService, ECookieVariable } from "../cookie";
import { SET_TRON_STATE } from "../main";
import { SET_INVESTOR } from "../main/investor.reducer";
import { translate } from '../../languages';
import { RequestMainService } from '../request';
import { SET_TREE_REPORT } from './treeReport.reducer';
import { WalletService } from '../wallet/wallet.service';

export class TronService {
  static async initialize() {
    const store = getClientStore();

    tron.setConfig({
      defi: getEnv('TRON_ADDRESS_DEFI'),
      ida: getEnv('TRON_ADDRESS_IDA'),
      imd: getEnv('TRON_ADDRESS_IMD'),
      tether: getEnv('TRON_ADDRESS_TETHER')
    })

    const tronState = await tron.connect();

    if (tronState === 'READY') {
      await tron.getContracts();

      Promise.all([
        this.getInvestor(),
        this.getTreeReport(),
        WalletService.getWalletBalances(),
      ])
    }

    store.dispatch({ type: SET_TRON_STATE, tronState });
  }

  static async getInvestor() {
    const store = getClientStore();

    const investor: any = await tron.getInvestor();
    const investorAddress = tron.getAddress();
    const isInvestorExist = await tron.isInvestorExist(investorAddress)

    CookieService.set(ECookieVariable.INVESTOR_ADDRESS, investorAddress);
    store.dispatch({ type: SET_INVESTOR, data: { ...investor, investorAddress, isInvestorExist } });

    return investor;
  }

  static async getTreeReport() {
    return RequestMainService.get(`/tree-report`)
      .then(data => getClientStore().dispatch({ type: SET_TREE_REPORT, data }))
      .catch(() => false);
  }

  static convertCurrencyAmountToShow(amount: number, coin: 'USDT' | 'IMD' | 'IDA' | 'DIF') {
    if (coin === 'USDT') return amount / 1000000;
    if (coin === 'IDA' || coin === 'IMD') return amount / 1000000000000000000;
    return amount;
  }

  static convertCurrencyShowToAmount(amount: number, type: 'USDT' | 'IMD' | 'IDA' | 'DIF'): number {
    if (type === 'USDT') return amount * 1000000;
    if (type === 'IDA' || type === 'IMD') (amount * 1000000000000000000);
    return amount;
  }

  static async checkIsTronReady() {
    return new Promise((resolve, reject) => {
      const tronState = getClientStore().getState().main.tronState;
      if (tronState === 'NONE') reject(new Error(`${translate('fetching-your-data')}. ${translate('please-try-later')}`));
      if (tronState === 'INSTALL_REQUIRED') reject(new Error(translate('you-must-install-tron-link-extension')));
      if (tronState === 'SIGN_IN_REQUIRED') reject(new Error(translate('you-must-sign-to-tron-link')));
      resolve(true);
    })
  }
}