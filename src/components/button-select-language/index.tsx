import React, { FC } from 'react'
import { getLocaleKey, locales, setLocale } from '../../languages';
import { Icon } from '../icon';
import { ClassNames, ObjectUtils } from '../../modules/utils';

export const ButtonSelectLanguage: FC<{ isFixed?: boolean }> = ({ isFixed }) => {
    const localeKey = getLocaleKey();
    const localeActive = locales.find(v => v.key === localeKey);
    const localeLable = ObjectUtils.getIn(localeActive, 'label', '--');

    return (
        <div className={ClassNames({ ButtonSelectLanguage: true, fixed: isFixed })}>
            {!isFixed ? <div className="label">{localeLable}</div> : null}

            <button type="button">
                <div className="info">
                    <img className="flag" src={`/assets/images/lang/${localeKey}.png`} alt="" />
                </div>

                <div className="toggleIcon">
                    <Icon.ArrowDown />
                </div>

                <div className="options">
                    <div className="wraper">
                        {locales.filter(v => v.isActive).map((item, key) => {
                            return (
                                <div
                                    key={key}
                                    className={ClassNames({
                                        item: true,
                                        language: true,
                                        active: item.key === localeKey
                                    })}
                                    onClick={() => setLocale(item.key)}
                                >
                                    <img className="flag" src={`/assets/images/lang/${item.key}.png`} alt="" />
                                    <div className="name">{item.label}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </button>
        </div>
    )
}

ButtonSelectLanguage.defaultProps = {
    isFixed: false
}