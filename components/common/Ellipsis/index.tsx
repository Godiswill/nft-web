import React, { PropsWithChildren } from 'react';
import styles from './index.module.scss';

export default function Ellipsis({ children }: PropsWithChildren) {
    return (
        <>
            {children}
            <span className={styles['dot-ani']}></span>
        </>
    );
}
