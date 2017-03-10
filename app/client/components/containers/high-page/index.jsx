import * as React from 'react';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { provideHooks } from 'redial';
import { browserHistory } from 'react-router';
import { selector } from './selectors';
import fetchDataEnhancer from '../../../helpers/fetch-data-enhancer';
import * as Actions from './actions';

const hooks = {
    fetchData: (...args) => {
        const { store } = args[0];
        store.dispatch(Actions.fetchText());
    },
};

class HighPage extends React.Component {

    constructor(props) {
        super(props);
        this.displayName = 'HighPage';
    }
    componentWillMount() {
        // console.log(this.props);
        // this.props.actions.fetchText();
    }

    render() {
        return (
            <div>
                <h1>HighPage</h1>
                <p>测试Recomse的稳定性</p>
                <p>{this.props.recomposeText.get('text')}</p>
                <a onClick={() => browserHistory.push('/')}>返回</a>
            </div>
        );
    }
}

const Page = provideHooks(hooks)(HighPage);
export default connect(
    selector,
    dispath => ({
        actions: bindActionCreators({
            fetchText: Actions.fetchText
        }, dispath)
}))(Page);
