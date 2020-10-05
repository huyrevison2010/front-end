import { FormEvent, FC } from 'react'
import { ILocale } from '../types';
import { FormikHelpers } from 'formik';

export interface IUseFormStructureItem {
    name: string,
    label?: any,
    description?: any,
    validate?: any,
    defaultValue?: any,
    isDisabled?: boolean,
    isVisible?: boolean,
    onChange?: (value: any) => void,
    isMutilLocale?: boolean
}

export interface IInputProps {
    name: string,
    value: any,
    error?: any,
    label?: any,
    description?: any,
    onChange: (value: any) => void,
    onTouched: (status?: boolean) => void,
    defaultValue?: any,
    isDisabled?: boolean,
    getValue?: (name: string) => any,
    locales?: ILocale[],
    isMutilLocale?: boolean
}

export interface IUseFormExportProps {
    values: any,
    getValue: (name: string) => any,
    setValues: (value: any) => any,
    setErrors: (value: any) => any,
    handleSubmit: (e?: FormEvent<HTMLFormElement>) => void,
    isSubmitting: boolean,
    getInputProps: (fieldName: string) => IInputProps,
    getDirtyFields: () => any
}

export interface IUseFormConfigs {
    structure: IUseFormStructureItem[],
    onSubmit: (values: any, dirtyFields: any, formHelpers: FormikHelpers<any>) => Promise<any> | void,
    isDebug?: boolean,
    enableReinitialize?: boolean,
    onSuccess?: (response?: any) => void
}

export interface IInputWraperInputProps extends IInputProps {
    label: any,
}

export interface IInputWraperProps {
    label?: any,
    inputProps: IInputProps,
    renderInput?: (state: IInputProps) => any,
    component?: FC<IInputProps>,
    className?: string,
    description?: any,
    enableReinitialize?: boolean,
    isVisible?: boolean,
    isRequired?: boolean,
}