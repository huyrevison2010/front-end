import React, { FC, memo } from 'react'

import { ETableSortDefaultValue, TableProps } from './types'
import { useTable } from './useTable'
import { ObjectUtils, ClassNames } from '../utils'
import { moduleConfig } from '../module.config'
import { Message } from '../message'
import { TableFilter } from './TableFilter'
import { TableSearch } from './TableSearch'
import { TablePagination } from './TablePagination'

export const Table: FC<TableProps> = memo((props) => {
    const { state, fetchData, setIsSearchBoxActive, isSearchBoxActive, sortObj } = useTable(props);

    return (
        <div className={ClassNames({ Table: true, [props.className as string]: props.className })}>
            {props.searchBox ? <TableSearch
                {...props.searchBox}
                structure={props.structure}
                onActive={() => setIsSearchBoxActive(true)}
                onOffSearch={() => setIsSearchBoxActive(false)}
            /> : null}

            {!isSearchBoxActive && props.filters && props.filters.length ? <TableFilter filters={props.filters || []} onSubmit={(params) => fetchData({ params })} /> : null}

            {!isSearchBoxActive ? <>
                <table>
                    <thead className="Table__Head">
                        <tr>
                            {props.structure.map((item, key) => {
                                const enableSort = !!item.sort;
                                const sortKey = ObjectUtils.getIn(item, 'key') || ObjectUtils.getIn(item, 'sort.key');
                                const sortValue = state.params[sortKey];

                                const increaseValue = ObjectUtils.getIn(item, 'sort.increaseValue', ETableSortDefaultValue.INCREASE);
                                const isIncrease = sortValue === increaseValue;

                                const descreaseValue = ObjectUtils.getIn(item, 'sort.descreaseValue', ETableSortDefaultValue.DESCREASE);
                                const isDescrease = sortValue === descreaseValue;

                                return (
                                    <th
                                        key={key}
                                        style={item.style}
                                        className={ClassNames({
                                            [item.className as string]: !!item.className,
                                            enableSort,
                                            increase: isIncrease,
                                            descrease: isDescrease,
                                        })}
                                        onClick={() => {
                                            if (enableSort) {
                                                if (isDescrease) return fetchData({ params: { ...sortObj, [sortKey]: increaseValue } })
                                                return fetchData({ params: { ...sortObj, [sortKey]: descreaseValue } })
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>

                    <tbody className="Table__Body">
                        {(() => {
                            if (!state.data) return null

                            return state.data.map((item, itemKey) => {
                                item['_order'] = (state.pagination.pageNumber - 1) * state.pagination.itemsPerPage + itemKey + 1;

                                return (
                                    <tr key={itemKey} className={item['_className']}>
                                        {props.structure.map((column, columnKey) => {
                                            return (
                                                <td className={column.className || ''} style={column.style} key={columnKey}>
                                                    {(() => {
                                                        if (column.render) return column.render(item, fetchData, column);
                                                        if (column.key) return `${ObjectUtils.getIn(item, column.key, '')}`;
                                                        return '--';
                                                    })()}
                                                </td>
                                            )
                                        })}
                                    </tr>
                                )
                            })
                        })()}
                    </tbody>
                </table>

                {(() => {
                    if (state.count === -1) return <Message type="loading" message={moduleConfig.translate('fetching-data')} />
                    if (state.error) return <Message type="error" message={state.error} />
                    if (!state.count || !state.data.length) return <Message type="emptyData" message={moduleConfig.translate('no-data')} />
                })()}

                {state.count && state.count !== -1 ? <TablePagination fetchData={fetchData} state={state} /> : null}
            </> : null}
        </div>
    )
}, (prevProps) => {
    if (!prevProps.enableReinitialize) return true
    return false
})

Table.defaultProps = {
    enableReinitialize: false,
}