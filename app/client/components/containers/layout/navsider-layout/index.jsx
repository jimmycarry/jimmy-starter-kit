import React from 'react';
import styles from './index.css';

export default ({ children }) => (
    <div className={`${styles.navsider_layout}`}>
        {children}
    </div>
);

