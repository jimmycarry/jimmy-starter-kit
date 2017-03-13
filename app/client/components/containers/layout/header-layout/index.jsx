import React from 'react';
import styles from './index.css';
import bgImage from '../../../../assets/html5.png';

export default () => (
    <div className={`${styles.header_layout}`}>
        <img src={bgImage} width="30px" height="30px" alt="logo" />
        <p className={`${styles.header_title}`}>H5 服务端渲染</p>
    </div>
);
