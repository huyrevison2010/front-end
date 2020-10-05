const defaultState = {}

export const SET_WALLET_TOTAL_PAYOUTS = 'SET_WALLET_TOTAL_PAYOUTS'

export const walletTotalPayoutsReducer = (state = defaultState, action: any) => {
  const { type, data } = action;
  if (type === SET_WALLET_TOTAL_PAYOUTS) return { ...state, ...data }
  return state;
}