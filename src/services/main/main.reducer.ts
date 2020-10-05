const defaultState = {
    isServerInitialized: false,
    isClientInitialized: false,
    device: {},
    userPageInitializeStatus: 'pending',
    tronState: '',
}

export const SET_DEVICE = 'SET_DEVICE';
export const SET_TRON_STATE = 'SET_TRON_STATE';
export const SET_USER_PAGE_INITIALIZE_STATUS = 'SET_USER_PAGE_INITIALIZE_STATUS';
export const SET_CLIENT_INITIALIZED = 'SET_CLIENT_INITIALIZED';

export const mainReducer = (state = defaultState, action: any) => {
    const { type, data } = action;
    if (type === SET_DEVICE) return { ...state, device: { ...state.device, ...data } }
    if (type === SET_USER_PAGE_INITIALIZE_STATUS) return { ...state, userPageInitializeStatus: action.status }
    if (type === SET_CLIENT_INITIALIZED) return { ...state, isClientInitialized: true }
    if (type === SET_TRON_STATE) return { ...state, tronState: action.tronState }
    return state;
}