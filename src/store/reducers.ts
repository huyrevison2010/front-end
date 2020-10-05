import { combineReducers } from 'redux';

import { mainReducer } from '../services/main/main.reducer';
import { investorReducer } from '../services/main/investor.reducer';
import { walletBalancesReducer } from '../services/main/walletBalances.reducer';
import { numberReportsReducer } from '../services/main/numberReports.reducer';
import { treeReportReducer } from '../services/tron/treeReport.reducer';
import { walletTotalPayoutsReducer } from '../services/wallet/walletTotalPayouts.reducer';

export const reducers = combineReducers({
    main: mainReducer,
    investor: investorReducer,
    walletBalances: walletBalancesReducer,
    numberReports: numberReportsReducer,
    treeReport: treeReportReducer,
    walletTotalPayouts: walletTotalPayoutsReducer,
});