import { CSSProperties, FC } from "react";

export interface TTableFuncFetchDataParameters {
    pagination?: TableStatePagination,
    params?: any,
    isForceUpdate?: boolean
}

export type TableFuncFetchData = (options?: TTableFuncFetchDataParameters) => Promise<any>

export interface ITableStructureItem {
    name: string,
    key?: string,
    render?: (rowValue: any, fetchData: (params?: TTableFuncFetchDataParameters) => void, column: ITableStructureItem) => any,
    style?: CSSProperties,
    className?: string,
    sort?: TableStructureSort,
}

export interface TableStructureSort {
    key?: string,
    increaseValue?: any,
    descreaseValue?: any,
}

export interface TableStructureItemFilter {
    name: string,
    key: string,
    defaultValue?: any,
    renderValue?: (value: any) => string,
    input: FC<TableFilterInputProps>
}

export interface TableFilterInputProps {
    paramKey: string,
    params: any,
    value: any,
    onChange: (value: any) => void,
}

export interface TableResponse {
    count: number,
    data: any[]
}

export interface TableProps {
    structure: ITableStructureItem[],
    onFetchData: (params: any) => Promise<TableResponse>,
    filters?: TableStructureItemFilter[],
    className?: string,
    itemPerPages?: number,
    enableReinitialize?: boolean,
    id?: string,
    searchBox?: TableSearchProps,
}

export interface TableStatePagination {
    pageNumber: number,
    itemsPerPage: number,
}

export interface ITableState {
    isFetchingData: boolean,
    count: number,
    data: any[],
    error: string,
    params: any,
    pagination: TableStatePagination,
}

export interface TableScrollProps {
    structure: ITableStructureItem[],
    filters?: TableStructureItemFilter[],
    isScrollInside?: boolean,
    className?: string,
    itemPerPages?: number,
    onFetchData: (params: any) => Promise<TableResponse>,
    searchBox?: TableSearchProps,
}

export interface TableSearchOnFetchDataResponse {
    label: string,
    value: any
}

export interface TableSearchProps {
    onFetchData: (q: string) => Promise<any[]>,
    onSelect: (value: any) => void,
    placeholder?: string,
}

export enum ETableSortDefaultValue {
    INCREASE = 'INCREASE',
    DESCREASE = 'DESCREASE',
}