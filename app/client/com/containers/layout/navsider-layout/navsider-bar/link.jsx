import React from 'react';
import { browserHistory } from 'react-router';
import { pure } from 'recompose';
import styles from './index.css';

export class Link extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Link';
    }
    render() {
        const { name, route } = this.props;
        return (
            <div>
                <a className={`${styles.navsider_bar_item}`} onClick={() => { browserHistory.push(route); }}>{name}</a>
            </div>
        );
    }
}

export default pure(Link);
