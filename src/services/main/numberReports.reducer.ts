const defaultState = {}

export const SET_NUMBER_REPORTS = 'SET_NUMBER_REPORTS';

export const numberReportsReducer = (state = defaultState, action: any) => {
    const { type, data } = action;
    if (type === SET_NUMBER_REPORTS) return { ...state, ...data };
    return state;
}