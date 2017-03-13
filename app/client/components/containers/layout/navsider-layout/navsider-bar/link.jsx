import React from 'react';
import { pure } from 'recompose';

export class Link extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Link';
    }
    render() {
        const { name } = this.props;
        return (
            <div>
                <a>{name}</a>
            </div>
        );
    }
}

export default pure(Link);
