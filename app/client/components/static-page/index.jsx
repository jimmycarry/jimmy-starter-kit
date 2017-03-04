import React from 'react';
import { browserHistory } from 'react-router';


class StaticPage extends React.Component {
  constructor(props) {
    super(props);
    this.displayName = 'StaticPage';
  }

  handleGoBack = () => {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <h1>static page</h1>  
        <a onClick={this.handleGoBack}>go back</a>  
      </div>
    ); 
  }

}

export default StaticPage;
