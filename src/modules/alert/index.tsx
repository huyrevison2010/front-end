import React, { FC, useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Icon } from '../icon';

interface IAlertItem {
    id?: any,
    type?: 'success' | 'warning' | 'danger',
    title?: string,
    message: string,
    secondTimeout?: number,
    isHover?: boolean,
}

export interface IAlertPayload {
    type?: 'success' | 'warning' | 'danger',
    title?: string,
    message: string,
}

let setAlertState: any

export const onError = (res: any) => CreateAlert(res.alert);

export function CreateAlert(payload: IAlertPayload, secondTimeout: number = 3) {
    try {
        const id = Date.now();
        // ============================ Add alert ============================
        setAlertState((state: IAlertItem[]) => ([...state, { ...payload, id, secondTimeout }]))

        // ============================ Auto remove ============================
        const onRemove = () => setAlertState((state: IAlertItem[]) => {
            const item: any = state.find(v => v.id === id);
            if (item && item.isHover) return state;
            return state.filter(v => v.id !== id);
        })

        if (secondTimeout) setTimeout(() => {
            onRemove();
        }, secondTimeout * 1000);

    } catch (error) {
        console.error(error);
    }
}

export const Alert: FC = () => {
    const [data, setData] = useState<IAlertItem[]>([]);

    setAlertState = setData;

    return (
        <div className="Alert">
            <TransitionGroup className="todo-list">
                {data.map((item, key: number) => {
                    const type = item.type || 'success';

                    return (
                        <CSSTransition
                            key={item.id}
                            timeout={500}
                            classNames="Alert__Item"
                        >
                            <div
                                className={`Alert__Item ${type}`}
                                key={key}
                                // onMouseEnter={() => { if (!item.isHover) setData(state => state.map(v => v.id === item.id ? { ...v, isHover: true } : v)) }}
                            >
                                <div className="icon">
                                    {(() => {
                                        if (type === 'success') return <Icon.Checked />
                                        if (type === 'danger') return <Icon.Danger />
                                        if (type === 'warning') return <Icon.Warning />
                                    })()}
                                </div>
                                <div className="content">
                                    <div className="title">
                                        {item.title || type}
                                    </div>
                                    <div className="message">
                                        {item.message}
                                    </div>
                                </div>

                                <div className="btnRemove" onClick={() => setData(state => state.filter(v => v.id !== item.id))}>
                                    <Icon.Close />
                                </div>
                            </div>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </div>
    )
}