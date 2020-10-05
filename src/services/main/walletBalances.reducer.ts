const defaultState = null

export const SET_WALLET_BALANCES = 'SET_WALLET_BALANCES';

export const walletBalancesReducer = (state = defaultState, action: any) => {
    const { type, data } = action;
    if (type === SET_WALLET_BALANCES) return data;
    return state;
}