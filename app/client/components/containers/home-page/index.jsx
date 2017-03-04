import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { selector } from './selectors';
import * as Action from './actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.homePageStart('Start');
    }

    handleClick = () => {
        this.props.homePageStart('Start');
       // browserHistory.push('/static-page');
    }

    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <a onClick={this.handleClick}>{this.props.welcome}</a>
            </div>
        );
    }

}

export default connect(selector, {
    homePageStart: Action.homePageStart
})(HomePage);
