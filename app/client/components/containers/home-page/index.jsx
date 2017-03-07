import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { selector } from './selectors';
import * as Action from './actions';
import * as globalAction from '../../global/actions';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // this.props.homePageStart('Start');
        
    }
    componentDidMount(){
         this.props.setWidthAndHeight({ width: window.document.documentElement.clientWidth,
            height: window.document.documentElement.clientHeight });   
    }
    handleClick = () => {
        this.props.homePageStart('Start');
        browserHistory.push('/static-page');
       
    }

    render() {
        return (
            <div>
                <h1>Home Pages</h1>
                <a onClick={this.handleClick}>static-page</a>
                <p>{this.props.welcome}</p>
            </div>
        );
    }

}

export default connect(selector, {
    homePageStart: Action.homePageStart,
    setWidthAndHeight: globalAction.setWidthAndHeight
})(HomePage);
