import React from 'react';
import HeaderLayout from './header-layout';
import MainLayout from './main-layout';
import NavsiderLayout from './navsider-layout';
import NavsiderBar from './navsider-layout/navsider-bar';
import styles from './index.css';

export default ({ children }) => (
    <div className={`${styles.layout_container}`}>
        <HeaderLayout />
        <NavsiderLayout>
            <NavsiderBar />
        </NavsiderLayout>    
        <MainLayout>
            {children}
        </MainLayout>
    </div>
);
