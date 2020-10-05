import { useState, useEffect } from "react";

import { TableProps, ITableState, TableFuncFetchData } from "./types";
import { ObjectUtils } from "../utils";

export const useTableState = (props: TableProps) => {
    const defaultState: ITableState = {
        isFetchingData: false,
        count: -1,
        data: [],
        error: '',
        params: props.filters ? props.filters.reduce((output: any = {}, item) => {
            if (item.defaultValue) {
                const defaultValue = item.defaultValue;
                if (typeof defaultValue === 'object') output = { ...output, ...defaultValue }
                else output[item.key || ''] = defaultValue
            }
            return output;
        }, {}) : {},
        pagination: {
            pageNumber: 1,
            itemsPerPage: props.itemPerPages || 10,
        },
    }

    const [state, setState] = useState(defaultState);

    return {
        state,
        setState,
        defaultState,
    }
}

export const useTable = (props: TableProps) => {
    const { state, setState } = useTableState(props);
    const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);

    // ======================= Functions =======================
    const fetchData: TableFuncFetchData = async (parameters) => {
        try {
            if (state.isFetchingData || !props.onFetchData) return;


            setState({ ...state, isFetchingData: true });

            let pagination = { ...state.pagination, ...ObjectUtils.getIn(parameters, 'pagination', {}) };
            let params = { ...state.params, ...ObjectUtils.getIn(parameters, 'params', {}) };

            const dataFetched = await props.onFetchData(Object.assign(params, {
                limit: pagination.itemsPerPage,
                offset: (pagination.pageNumber - 1) * pagination.itemsPerPage,
                pageNumber: pagination.pageNumber
            }));

            const count = ObjectUtils.getIn(dataFetched, 'count', 0);
            const data = ObjectUtils.getIn(dataFetched, 'data', []);
            const error = ObjectUtils.getIn(dataFetched, 'error.message', '');

            return setState({
                isFetchingData: false,
                count,
                data,
                error,
                params,
                pagination,
            });

        } catch (error) {
            return setState({
                ...state,
                error: error.message,
                isFetchingData: false
            });
        }
    }

    // ======================= Effects =======================
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    const sortObj = props.structure.filter(v => v.sort).reduce((obj: any, item) => {
        if (item.sort) {
            const key = item.key || item.sort.key || '';
            obj[key] = '';
        }
        return obj
    }, {});

    return {
        state,
        fetchData,

        isSearchBoxActive,
        setIsSearchBoxActive,

        sortObj,
    }
}

// export const useTableScroll = (props: ITableScrollProps) => {
//     const refTable = useRef(null);
//     const { state, setState, defaultState } = useTableState(props);
//     const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);

//     const fetchData = async (parameters, isForceUpdate = false) => {
//         try {
//             let currentState: ITableState = state;

//             const action = async () => {
//                 setState(isForceUpdate ? { ...defaultState, isFetchingData: true } : { ...state, isFetchingData: true });

//                 let pagination = { ...currentState.pagination, ...ObjectUtils.getIn(parameters, 'pagination', {}) };
//                 let params = { ...currentState.params, ...ObjectUtils.getIn(parameters, 'params', {}) };

//                 const dataFetched = await props.onFetchData(Object.assign(params, {
//                     limit: pagination.itemsPerPage,
//                     offset: isForceUpdate ? 0 : currentState.data.length,
//                     pageNumber: isForceUpdate ? 1 : Math.ceil(currentState.data.length / pagination.itemsPerPage) + 1,
//                 }));

//                 const count = ObjectUtils.getIn(dataFetched, 'count', 0);
//                 const data = ObjectUtils.getIn(dataFetched, 'data', [], arr => isForceUpdate ? [...arr] : [...currentState.data, ...arr]);
//                 const error = ObjectUtils.getIn(dataFetched, 'error.message', '');

//                 setState(state => ({
//                     ...state,
//                     data,
//                     count,
//                     params,
//                     error,
//                     pagination,
//                     isFetchingData: false,
//                 }));
//             }

//             if (!currentState.isFetchingData && props.onFetchData) {
//                 if (isForceUpdate) await action()
//                 else if (!currentState.error && currentState.data.length < currentState.count) await action()
//             }
//         } catch (error) {
//             setState(state => ({ ...state, error: error.message, isFetchingData: false }));
//         }
//     }

//     const handleTableScroll = () => {
//         // @ts-ignore
//         const tableElement: HTMLDivElement = refTable.current;
//         const tableOffsetHeight = tableElement.offsetHeight;
//         const tableScrollHeight = tableElement.scrollHeight;
//         const tableScrollTop = tableElement.scrollTop;
//         const isReadyToFetchData = (tableScrollTop + 100) >= (tableScrollHeight - tableOffsetHeight)
//         if (isReadyToFetchData) fetchData()
//     }

//     const handleBodyScroll = () => {
//         // @ts-ignore
//         const tableElement: HTMLDivElement = refTable.current, body: HTMLBodyElement = window.document.body;
//         const positionBodyBottom = body.scrollTop + window.innerHeight;
//         const positionTableBottom = tableElement.offsetTop + tableElement.offsetHeight;
//         const isReadyToFetchData = (positionTableBottom - 80) <= positionBodyBottom;
//         if (isReadyToFetchData) fetchData()
//     }

//     useEffect(() => {
//         // @ts-ignore
//         const tableElement: HTMLDivElement = refTable.current, body: HTMLBodyElement = window.document.body;

//         if (state.data.length !== state.count) {
//             if (!props.isScrollInside) {
//                 handleBodyScroll();
//                 body.removeEventListener('scroll', handleBodyScroll)
//                 body.addEventListener('scroll', handleBodyScroll)
//             } else {
//                 tableElement.removeEventListener('scroll', handleTableScroll)
//                 tableElement.addEventListener('scroll', handleTableScroll)
//             }
//         }

//         return () => {
//             if (!props.isScrollInside) body.removeEventListener('scroll', handleBodyScroll)
//             else tableElement.addEventListener('scroll', handleTableScroll)
//         }

//         // eslint-disable-next-line
//     }, [props.isScrollInside, state])

//     useEffect(() => {
//         setState({ ...defaultState });
//         fetchData({}, true);
//         // eslint-disable-next-line
//     }, [])

//     return {
//         refTable,
//         handleBodyScroll,
//         handleTableScroll,
//         state,
//         fetchData,

//         isSearchBoxActive,
//         setIsSearchBoxActive,
//     }
// }