import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './global-styles.scss';

import { App } from './components/app/app';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);