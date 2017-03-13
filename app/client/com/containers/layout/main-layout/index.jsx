import React from 'react';
import styles from './index.css';

export default ({ children }) => (
    <div className={`${styles.main_layout}`}>
        <div className={`${styles.main_layout_container}`}>
             {children}        
        </div> 
    </div>
);
