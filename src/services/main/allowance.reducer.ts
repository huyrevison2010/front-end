const defaultState = null

export const SET_ALLOWANCE = 'SET_ALLOWANCE';

export const allowanceReducer = (state = defaultState, action: any) => {
    const { type, data } = action;
    if (type === SET_ALLOWANCE) return { ...state || {}, ...data };
    return state;
}