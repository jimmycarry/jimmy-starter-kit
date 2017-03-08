import React from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import fetchDataEnhancer from '../../helpers/fetch-data-enhancer';
import * as Actions from './actions';
import { selector } from './selectors';

export const StaticPage = ({ sta, actions }) => (
  <div>
    <h1>Static Page</h1>
    <div>{ sta.get('staticText') }</div>
    <a onClick={() => browserHistory.push('/')}>home</a>
  </div>
);

export const enhance = compose(
  fetchDataEnhancer(
    ({ store }) => store.dispatch(Actions.fetchStaicText())
  ),
  connect(selector, dispatch => ({
    actions: bindActionCreators({
      fetchStaicText: Actions.fetchStaicText
    }, dispatch)
  }))
);

export default enhance(StaticPage);
