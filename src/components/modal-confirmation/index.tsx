import React, { FC, useState } from 'react'
import { Button } from '../button'
import { Icon } from '../icon'
import { translate } from '../../languages';

export interface IModalConfirmationState {
    title: string,
    content: any,
    onNext: () => Promise<any>
}

export let OnModalConfirmation: (state: IModalConfirmationState) => any = (state) => state;

export const ModalConfirmation: FC = () => {
    const [state, setState] = useState(null as IModalConfirmationState | null);
    const [loading, setLoading] = useState('');

    OnModalConfirmation = (state: IModalConfirmationState) => setState(state);

    if (!state) return null

    const { title, content, onNext } = state;

    return (
        <div className="ModalConfirmation">
            <div className="wraper">
                <div className="head">
                    <div className="title">{title}</div>
                    <div className="btnClose" onClick={() => setState(null)}>
                        <Icon.Close />
                    </div>
                </div>
                <div className="content">
                    {content}
                </div>

                <div className="ctas">
                    <Button isVisible={loading !== 'next'} label={translate('cancel')} buttonType="grey-outline" onClick={() => setState(null)} />
                    <Button className="ctaNext" label={translate('invest')} onClick={async () => {
                        try {
                            setLoading('next');
                            await onNext();
                            setState(null);
                        } catch (error) { }
                    }} />
                </div>
            </div>
        </div>
    )
}