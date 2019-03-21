import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SoftwareRequirementsApp from './SortwareRequirementsApp';
import * as serviceWorker from './serviceWorker';

//TODO Get this data from a service
const project = {
  name: 'Test Project',
  inScope: [ 'doing things', 'doing other things'],
  outScope: [ 'doing something else' ]
}

const state = {
  project: project
}

ReactDOM.render(<SoftwareRequirementsApp {...state} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
