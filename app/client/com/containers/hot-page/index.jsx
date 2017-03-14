import React from 'react';
import { compose, onlyUpdateForKeys } from 'recompose';
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';
import fetchDataEnhancer from '../../../helpers/fetch-data-enhancer';
import { selector } from './selectors';
import * as Actions from './actions';

export const HotPage = ({ newsList }) => {
    return (
        <div>
            <ul>
                {newsList.map((item, index) => {
                    return (<li key={index}>
                        {item.get('title')}    
                    </li>);
                })}
            </ul>
        </div>
    );
};

export const enhance = compose(
    fetchDataEnhancer(
        ({ store }) => store.dispatch(Actions.fetchHotList())
    ),
    connect(selector,
        dispatch => ({
            actions: bindActionCreators({
                fetchHotList: Actions.fetchHotList
            })
        })
    ),
    onlyUpdateForKeys(['newsList'])
);

export default enhance(HotPage);
