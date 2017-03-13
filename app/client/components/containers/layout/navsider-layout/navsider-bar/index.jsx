import React from 'react';
import { compose, onlyUpdateForKeys } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchDataEhancer from '../../../../../helpers/fetch-data-enhancer';
import * as Actions from './actions';
import { selector } from './selector';
import Link from './link';

export class NavSiderBar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'NavSiderBar';
    }
    componentDidMount() {
       // console.log('fetchList');
        this.props.fetchList();
    }
    render() {
        return (
            <div>{this.props.navList.map((item, index) => {
                return (<Link name={item.get('name')} />);
            })}</div>
        );
    }
}

export default connect(selector, {
    fetchList: Actions.fetchList
}
)(NavSiderBar);
