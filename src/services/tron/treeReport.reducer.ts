const defaultState = null

export const SET_TREE_REPORT = 'SET_TREE_REPORT';
 
export const treeReportReducer = (state = defaultState, action: any) => {
    const { type, data } = action;
    if (type === SET_TREE_REPORT) return data;
    return state;
}