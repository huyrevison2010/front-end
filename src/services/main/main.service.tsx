import { Store } from 'redux'

import { getClientStore, useSelector } from "../../store";
import { SET_CLIENT_INITIALIZED, SET_USER_PAGE_INITIALIZE_STATUS } from "./main.reducer";
import { TronService } from '../tron/tron.service';
import { EDeviceType } from '../../types';
import { ObjectUtils } from '../../modules/utils';
import { RequestMainService } from '../request';
import { SET_NUMBER_REPORTS } from './numberReports.reducer';
import { getLocaleKey, translate } from '../../languages';
import tron from '../tron/tron';
import { WalletService } from '../wallet/wallet.service';
import { setIntervalAsync } from 'set-interval-async/fixed';

export class MainService {
  static async initialFromServer(store: Store) {
    return store
  }

  static async initializeClient() {
    await TronService.initialize()

    setIntervalAsync(async () => {
      await Promise.all([
        this.getNumberReports(),
        WalletService.getWalletTotalPayouts()
      ])
        .catch(() => false)
    }, 2000)

    getClientStore().dispatch({ type: SET_CLIENT_INITIALIZED })
  }

  static async initialUserPage() {
    const store = getClientStore();
    const { userPageInitializeStatus } = store.getState().main;

    if (userPageInitializeStatus !== 'pending') return

    store.dispatch({ type: SET_USER_PAGE_INITIALIZE_STATUS, status: 'processing' });

    store.dispatch({ type: SET_USER_PAGE_INITIALIZE_STATUS, status: 'completed' });
  }

  static useDeviceType() {
    const device = useSelector(state => state.main.device);
    const deviceType: EDeviceType = ObjectUtils.getIn(device, 'type');
    return deviceType
  }

  static useDashboardPage() {
    const investor = useSelector(state => state.investor);
    const numberReportValues = useSelector(state => state.numberReports)
    const walletTotalPayouts = useSelector(state => state.walletTotalPayouts)

    const isInvested = !!ObjectUtils.getIn(investor, 'isInvestorExist', false);
    const rank: number = +ObjectUtils.getIn(investor, 'rank', '0');

    const personalNumberReports = [
      {
        title: `${translate('invest-status')}`,
        value: isInvested ? `${translate('active')}` : `${translate('none')}`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.423 15"><path className="a" d="M560.389,577.4H546.1v-12.61a.711.711,0,0,0-1.422,0v13.321a.711.711,0,0,0,.711.711h15a.711.711,0,0,0,0-1.422Z" transform="translate(-544.677 -563.818)" /><g transform="translate(3.003)"><path className="a" d="M571.769,570.78l3.884-4.2v1.271a.8.8,0,0,0,.455.737.7.7,0,0,0,.8-.173l3.627-3.925.555.647a.244.244,0,0,0,.426-.12l.467-2.879a.244.244,0,0,0-.283-.28l-2.572.451a.244.244,0,0,0-.144.4l.532.631-2.391,2.587V564.65a.8.8,0,0,0-.455-.737.7.7,0,0,0-.8.173l-5.168,5.592a.233.233,0,0,0,0,.316l.726.785A.233.233,0,0,0,571.769,570.78Z" transform="translate(-570.639 -561.852)" /><path className="a" d="M648.9,597.2l.83.969v6.572a.448.448,0,0,1-.448.448h-1.153a.448.448,0,0,1-.448-.448v-6.793l.964-1.043Z" transform="translate(-638.768 -592.854)" /><path className="a" d="M624.73,613.814v5.881a.448.448,0,0,1-.448.448h-1.153a.448.448,0,0,1-.448-.448v-4.136a1.6,1.6,0,0,0,.9-.5Z" transform="translate(-616.662 -607.803)" /><path className="a" d="M599.677,622.043l.056.023v4.225a.448.448,0,0,1-.448.448h-1.153a.448.448,0,0,1-.448-.448v-3.733l1.187-1.285A1.694,1.694,0,0,0,599.677,622.043Z" transform="translate(-594.557 -614.4)" /><path className="a" d="M573.238,641.521a.233.233,0,0,0,.342,0l.473-.512.683-.739v2.82a.448.448,0,0,1-.448.448h-1.153a.448.448,0,0,1-.448-.448v-2.166l.078.084Z" transform="translate(-572.451 -631.199)" /></g></svg>
      },
      {
        title: `${translate('current-rank')}`,
        value: rank === 1 ? `${translate('agent')}` : rank === 2 ? `${translate('master-agent')}` : `${translate('member')}`,
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.056 13"><path className="a" d="M302.166,96.61a2.747,2.747,0,0,1,.759.536,2.705,2.705,0,0,1,.794,1.918.342.342,0,0,1-.342.341h-4.742a.342.342,0,0,1-.342-.341,2.711,2.711,0,0,1,1.554-2.453q-.06-.05-.114-.1a1.8,1.8,0,1,1,2.545,0h0c-.035.036-.073.07-.111.1Zm-6.183,4.716a.342.342,0,0,1-.683,0v-.686a.342.342,0,0,1,.342-.341h5.021v-.344a.342.342,0,1,1,.685,0v.344h5.021a.342.342,0,0,1,.342.341v.686a.342.342,0,0,1-.683,0v-.344h-4.68v.344a.342.342,0,0,1-.685,0v-.344h-4.68v.344Zm10.5.614a1.393,1.393,0,0,1,1,2.362,2.027,2.027,0,0,1,.452.341l.017.019a2.041,2.041,0,0,1,.583,1.432.342.342,0,0,1-.341.342h-3.42a.343.343,0,0,1-.342-.342,2.047,2.047,0,0,1,.6-1.451l.019-.017a2.111,2.111,0,0,1,.433-.323,1.39,1.39,0,0,1,.013-1.953l.022-.019a1.386,1.386,0,0,1,.964-.39Zm.5.893a.711.711,0,0,0-.989-.014l-.014.014a.709.709,0,0,0,.493,1.21h.017a.711.711,0,0,0,.493-.208h0a.708.708,0,0,0,0-1Zm.466,2.294a1.367,1.367,0,0,0-.962-.4h-.011a1.371,1.371,0,0,0-.947.385l-.014.016a1.387,1.387,0,0,0-.358.625h2.651a1.366,1.366,0,0,0-.342-.61l-.016-.014Zm-6.444-3.187a1.394,1.394,0,0,1,1,2.362,2.063,2.063,0,0,1,.452.341l.018.019a2.048,2.048,0,0,1,.583,1.432.343.343,0,0,1-.342.342H299.3a.343.343,0,0,1-.342-.342,2.047,2.047,0,0,1,.6-1.451l.021-.017a2.1,2.1,0,0,1,.431-.323,1.391,1.391,0,0,1,.014-1.953l.021-.019a1.386,1.386,0,0,1,.964-.39Zm.5.893a.711.711,0,0,0-.989-.014l-.013.014a.709.709,0,0,0,.491,1.21h.019a.7.7,0,0,0,.491-.208h0a.71.71,0,0,0,.206-.5.7.7,0,0,0-.208-.5Zm.468,2.294a1.37,1.37,0,0,0-.962-.4H301a1.365,1.365,0,0,0-.946.385l-.016.016a1.37,1.37,0,0,0-.357.625h2.649a1.364,1.364,0,0,0-.342-.61l-.014-.014Zm-6.446-3.187a1.392,1.392,0,0,1,1,2.362,2.03,2.03,0,0,1,.452.341l.017.019a2.041,2.041,0,0,1,.583,1.432.342.342,0,0,1-.342.342H293.82a.342.342,0,0,1-.342-.342,2.046,2.046,0,0,1,.6-1.451l.019-.017a2.1,2.1,0,0,1,.431-.323,1.392,1.392,0,0,1,.014-1.953l.022-.019a1.382,1.382,0,0,1,.962-.39Zm.5.893a.713.713,0,0,0-.991-.014l-.013.014a.709.709,0,0,0,.493,1.21h.017a.711.711,0,0,0,.493-.208h0a.708.708,0,0,0,0-1Zm.466,2.294a1.367,1.367,0,0,0-.962-.4h-.011a1.365,1.365,0,0,0-.947.385l-.014.016a1.359,1.359,0,0,0-.358.625h2.651a1.38,1.38,0,0,0-.342-.61l-.016-.014Zm4.509-8.777h0a1.112,1.112,0,0,0,.788-.327l0,0a1.12,1.12,0,1,0-.789.325Zm1.436,1.278a2.029,2.029,0,0,0-1.436-.593h0a2.024,2.024,0,0,0-2,1.687h4A2.03,2.03,0,0,0,302.442,97.628Z" transform="translate(-293.478 -93.436)" /></svg>
      },
    ]

    const numberReports: { title: string, value: any, icon: any, isHasAnimate?: boolean }[] = [
      {
        title: `${translate('total-profits')}`,
        value: ObjectUtils.getIn(numberReportValues, 'totalProfit', '--', (value: number) => `${(value / 1000000000000000000).toLocaleString(getLocaleKey())} IDA`),
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.57 18"><g transform="translate(-100 -684.257)"><path className="a" d="M105.712,763.87a5.712,5.712,0,1,1,5.712-5.712A5.718,5.718,0,0,1,105.712,763.87Zm0-10.708a5,5,0,1,0,5,5A5,5,0,0,0,105.712,753.162Z" transform="translate(0 -61.613)" /><path className="a" d="M140.734,789.322a1.391,1.391,0,1,1,0-2.782.358.358,0,1,1,0,.716.675.675,0,0,0,0,1.35.358.358,0,1,1,0,.716Z" transform="translate(-35.549 -92.419)" /><path className="a" d="M161.337,810.743a.358.358,0,1,1,0-.716.675.675,0,0,0,0-1.349.358.358,0,1,1,0-.716,1.391,1.391,0,1,1,0,2.781Z" transform="translate(-55.098 -111.775)" /><path className="a" d="M151.462,808.678h-1.054a.358.358,0,1,1,0-.716h1.054a.358.358,0,1,1,0,.716Z" transform="translate(-45.223 -111.775)" /><path className="a" d="M141.788,830.092H139.7a.358.358,0,1,1,0-.716h2.087a.358.358,0,1,1,0,.716Z" transform="translate(-35.549 -131.124)" /><path className="a" d="M152.5,787.256h-2.087a.358.358,0,1,1,0-.716H152.5a.358.358,0,1,1,0,.716Z" transform="translate(-45.223 -92.419)" /><path className="a" d="M155.874,779.357a.358.358,0,0,1-.358-.358v-.843a.358.358,0,0,1,.717,0V779A.358.358,0,0,1,155.874,779.357Z" transform="translate(-50.162 -84.52)" /><path className="a" d="M155.874,830.956a.358.358,0,0,1-.358-.358v-.864a.358.358,0,0,1,.717,0v.864A.358.358,0,0,1,155.874,830.956Z" transform="translate(-50.162 -131.124)" /><path className="a" d="M177.508,688.682c-2.82,0-5.818-.775-5.818-2.213,0-1.453,2.927-2.213,5.818-2.213s5.838.76,5.838,2.213C183.346,687.907,180.338,688.682,177.508,688.682Zm0-3.709c-3.16,0-5.1.872-5.1,1.5s1.987,1.5,5.1,1.5,5.122-.887,5.122-1.5S180.634,684.973,177.508,684.973Z" transform="translate(-64.776)" /><path className="a" d="M222.928,821.24h-.611a.358.358,0,1,1,0-.716h.611c3.126,0,5.122-.887,5.122-1.5a.358.358,0,0,1,.717,0C228.766,820.48,225.829,821.24,222.928,821.24Z" transform="translate(-110.196 -121.449)" /><path className="a" d="M172.048,707.429a.358.358,0,0,1-.358-.358v-3.225a.358.358,0,0,1,.717,0v3.225A.358.358,0,0,1,172.048,707.429Z" transform="translate(-64.776 -17.376)" /><path className="a" d="M285.478,715.312a.358.358,0,0,1-.358-.358V703.846a.358.358,0,0,1,.717,0v11.108A.358.358,0,0,1,285.478,715.312Z" transform="translate(-167.267 -17.376)" /><path className="a" d="M223.914,764.2c-.092,0-.184-.005-.276-.011-.077-.005-.154-.01-.23-.01a.358.358,0,1,1,0-.716c.092,0,.184.005.275.011s.154.01.231.01c3.126,0,5.122-.887,5.122-1.5a.358.358,0,0,1,.717,0C229.753,763.42,226.745,764.2,223.914,764.2Z" transform="translate(-111.183 -69.907)" /><path className="a" d="M228.656,792.831a.358.358,0,1,1,0-.716c3.126,0,5.122-.887,5.122-1.5a.358.358,0,0,1,.717,0C234.495,792.055,231.486,792.831,228.656,792.831Z" transform="translate(-115.925 -95.78)" /><path className="a" d="M177.508,735.349a13.334,13.334,0,0,1-2.948-.283.359.359,0,0,1,.162-.7,12.573,12.573,0,0,0,2.786.266c3.126,0,5.122-.887,5.122-1.5a.358.358,0,0,1,.717,0C183.346,734.59,180.409,735.349,177.508,735.349Zm-5.312-1.412a.357.357,0,0,1-.292-.15,1.1,1.1,0,0,1-.214-.651.358.358,0,0,1,.717,0,.388.388,0,0,0,.081.234.358.358,0,0,1-.291.566Z" transform="translate(-64.776 -43.843)" /></g></svg>,
      },
      {
        title: `${translate('total-comission')}`,
        value: ObjectUtils.getIn(walletTotalPayouts, 'USDT', '--', (value: number) => `$${(+value / 1000000000000000000).toLocaleString(getLocaleKey())}`),
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22.721 18"><g transform="translate(-100 -146.159)"><path className="a" d="M138.527,228.313a7.844,7.844,0,0,1-1.452-.148.439.439,0,1,1,.163-.862c2.311.44,3.646-.2,4.084-1.945a.438.438,0,0,1,.425-.331c3.121,0,3.791-.059,3.791-.672,0-.825-4.347-.825-5.983-.825a.438.438,0,1,1,0-.876c4.648,0,6.86.254,6.86,1.7,0,1.494-1.362,1.546-4.338,1.548A3.373,3.373,0,0,1,138.527,228.313Z" transform="translate(-32.385 -67.468)" /><path className="a" d="M100.438,205.948a.438.438,0,0,1-.328-.729c.318-.357.627-.729.938-1.1,1.891-2.275,4.035-4.863,8.767-4.691a.438.438,0,0,1,.423.453.428.428,0,0,1-.453.423c-4.287-.14-6.213,2.151-8.062,4.376-.318.381-.633.761-.957,1.126A.436.436,0,0,1,100.438,205.948Z" transform="translate(0 -46.972)" /><path className="a" d="M143.278,270.946a.438.438,0,0,1-.35-.7c.116-.155.233-.317.35-.479s.231-.321.346-.475a.439.439,0,0,1,.351-.175c.928,0,4.1-.129,6.034-1.778a.438.438,0,1,1,.57.666c-1.985,1.7-4.976,1.963-6.381,1.986l-.209.289c-.119.166-.239.332-.359.492A.439.439,0,0,1,143.278,270.946Z" transform="translate(-37.785 -106.787)" /><path className="a" d="M224.79,202.334a1.534,1.534,0,0,1,0-3.068.438.438,0,1,1,0,.876.658.658,0,0,0,0,1.316.438.438,0,1,1,0,.876Z" transform="translate(-108.723 -46.84)" /><path className="a" d="M242.285,220.885a.438.438,0,1,1,0-.876.645.645,0,0,0,0-1.291.438.438,0,1,1,0-.876,1.522,1.522,0,1,1,0,3.043Z" transform="translate(-125.109 -63.224)" /><path className="a" d="M233.995,218.718h-1.109a.438.438,0,1,1,0-.876h1.109a.438.438,0,1,1,0,.876Z" transform="translate(-116.818 -63.224)" /><path className="a" d="M225.9,237.082h-2.192a.438.438,0,1,1,0-.876H225.9a.438.438,0,1,1,0,.876Z" transform="translate(-108.723 -79.421)" /><path className="a" d="M235.078,200.142h-2.192a.438.438,0,1,1,0-.876h2.192a.438.438,0,1,1,0,.876Z" transform="translate(-116.818 -46.84)" /><path className="a" d="M237.478,193.587a.438.438,0,0,1-.438-.438v-.877a.438.438,0,0,1,.877,0v.877A.438.438,0,0,1,237.478,193.587Z" transform="translate(-120.869 -40.285)" /><path className="a" d="M237.478,237.985a.438.438,0,0,1-.438-.438v-.9a.438.438,0,0,1,.877,0v.9A.438.438,0,0,1,237.478,237.985Z" transform="translate(-120.869 -79.421)" /><path className="a" d="M210.681,256.752a6.122,6.122,0,0,1-3.863-1.414.438.438,0,1,1,.556-.677,5.247,5.247,0,0,0,3.307,1.216,5.307,5.307,0,0,0,1.932-.384.439.439,0,0,1,.315.819A6.278,6.278,0,0,1,210.681,256.752Z" transform="translate(-94.072 -95.61)" /><path className="a" d="M190.7,175.4a.488.488,0,0,1-.087-.009.439.439,0,0,1-.344-.516,6.091,6.091,0,0,1,5.949-4.89,6.242,6.242,0,0,1,2.246.415.439.439,0,0,1-.315.819,5.359,5.359,0,0,0-1.932-.358,5.211,5.211,0,0,0-5.089,4.187A.439.439,0,0,1,190.7,175.4Z" transform="translate(-79.613 -21.013)" /><path className="a" d="M269.607,177.067a.438.438,0,0,1-.438-.438V163.863a.438.438,0,0,1,.877,0v12.766A.438.438,0,0,1,269.607,177.067Z" transform="translate(-149.207 -15.229)" /><path className="a" d="M255.919,163.876a2.338,2.338,0,0,1-2.193-1.554.439.439,0,0,1,.826-.295,1.445,1.445,0,0,0,2.81-.472V148.48a1.452,1.452,0,0,0-2.854-.369.438.438,0,1,1-.842-.243,2.329,2.329,0,0,1,4.573.612v13.075A2.323,2.323,0,0,1,255.919,163.876Z" transform="translate(-135.519)" /></g></svg>
      },
      {
        title: `${translate('revenue')}`,
        value: ObjectUtils.getIn(numberReportValues, 'revenue', '--', (value: number) => `$${(value / 1000000000000000000).toLocaleString(getLocaleKey())}`),
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.999 18"><path className="a" d="M412.712,111.806a8.351,8.351,0,0,0-.763.5l4.835,5.778,5.609-5.031a8.043,8.043,0,0,0-9.679-1.247Zm12.894,5.435,0,.016,0,.02a8.994,8.994,0,0,1-4.335,9.259.527.527,0,0,1-.076.047,8.994,8.994,0,0,1-12.238-3.281.52.52,0,0,1-.044-.076,9,9,0,0,1,2.027-11.347l.013-.011.013-.009A8.836,8.836,0,0,1,412.2,111a.246.246,0,0,1,.067-.038,9,9,0,0,1,12.238,3.279.332.332,0,0,1,.04.067,8.963,8.963,0,0,1,1.058,2.937Zm-.876.651a8.043,8.043,0,0,1-3.95,7.827l-.024.016a8.015,8.015,0,0,1-6.1.8c-.089-.022-.176-.049-.265-.076l2.7-7.265,7.643-1.3Zm-6.445.127,4.744-4.255a8.108,8.108,0,0,1,.669.983l0,0a8.112,8.112,0,0,1,.869,2.2l-6.285,1.072Zm-7.072-5.1,4.977,5.945-2.7,7.265a8.048,8.048,0,0,1-2.279-13.21Z" transform="translate(-407.735 -109.77)" /></svg>
      },
    ]

    return {
      personalNumberReports,
      numberReports
    }
  }

  static async getNumberReports() {
    try {
      const [overall, totalProfit, revenue, startAt] = await Promise.all([
        RequestMainService.get(`/overall`),
        tron.getTotalDailyIncome().catch(() => undefined),
        tron.getRevenue().catch(() => undefined),
        tron.getStartAt().catch(() => undefined),
      ])

      const store = getClientStore();
      store.dispatch({
        type: SET_NUMBER_REPORTS,
        data: {
          ...overall,
          totalProfit,
          revenue,
          startAt
        }
      })
    } catch (error) {
      console.error('error', error);
    }
  }
}