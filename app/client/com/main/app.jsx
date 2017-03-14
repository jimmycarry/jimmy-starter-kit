import React from 'react';
import { Provider } from 'react-redux';
import 'babel-polyfill';
import ES6 from 'es6-promise';

ES6.polyfill();

const App = ({ store, routes }: { store: Object, routes: Object }) => {
  if (process.env.NODE_ENV === 'development') {
    const { AppContainer } = require('react-hot-loader');

    return (
      <AppContainer>
        <Provider key="provider" store={store}>
          {routes}
        </Provider>
      </AppContainer>
    );
  }

  return (
    <Provider key="provider" store={store}>
      {routes}
    </Provider>
  );
};

export default App;
