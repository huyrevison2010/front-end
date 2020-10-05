import { createStore, applyMiddleware, Store } from 'redux'
import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux'
import { MakeStore } from 'next-redux-wrapper'

import { composeWithDevTools } from 'redux-devtools-extension'
import { reducers } from './reducers'
import { isDev } from '../AppConfig'

export const makeStore: MakeStore = (initialState: RootState) => {
    const store = createStore(reducers, initialState, isDev ? composeWithDevTools(applyMiddleware()) : undefined);
    try {
        // @ts-ignore
        if (window) window.store = store;
    } catch (error) { }
    return store;
};

// @ts-ignore
export const getClientStore = (): Store => window.store;

export type RootState = ReturnType<typeof reducers>
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector
