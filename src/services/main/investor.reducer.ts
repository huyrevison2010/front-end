const defaultState = null

export const SET_INVESTOR = 'SET_INVESTOR';

export const investorReducer = (state = defaultState, action: any) => {
    const { type } = action;
    if (type === SET_INVESTOR) return action.data;
    return state;
}