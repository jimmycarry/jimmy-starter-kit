import React from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { selector } from './selectors';
import * as Action from './actions';
// import * as globalAction from '../../global/actions';
import fetchDataEnhancer from '../../../helpers/fetch-data-enhancer';
import styles from './index.css';

export const HomePage = ({ home, global, actions }) => (
    <div className={`${styles.container}`}>
        <h1>Home Page</h1>
        <a onClick={() => { browserHistory.push('/static-page'); }}>welcome</a>
        <p>{home.get('loading')}</p>
        <ul>
            {home.get('list').map((item, index) => {
                return (
                    <li key={index}>{item.get('text')}</li>  
                );
            })}    
        </ul>
    </div>
);


export const enhance = compose(
    fetchDataEnhancer(
        ({ store }) => store.dispatch(Action.fetchTodos())
    ),
    connect(
        selector,
        dispatch => ({
            actions: bindActionCreators({
                homePageStart: Action.homePageStart,
                fetchTodos: Action.fetchTodos,
                getClientWidthHeight: global.getClientWidthHeight,
            }, dispatch),
        })
    )
);

export default enhance(HomePage);
