import { useRouter } from 'next/router'
import NextLink from 'next/link'
import React, { FC } from 'react'
import { ClassNames } from '../../modules/utils'

export interface ILinkProps {
    href: string,
    path?: string,
    className?: any,
    exact?: boolean
}

export const Link: FC<ILinkProps> = ({ children, href, path, className, exact }) => {
    const router = useRouter();
    const { pathname } = router

    const classNameStr = typeof className === 'string' ? className : ClassNames(className);

    return (
        <NextLink href={href} as={path} passHref>
            <a className={ClassNames({ active: exact ? pathname === href : pathname.search(href) !== -1 }) + ` ${classNameStr}`}>
                {children}
            </a>
        </NextLink>
    )
}