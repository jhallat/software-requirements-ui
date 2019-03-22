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

function onAddScopeItem(type) {
  if (type === 'in') {
    state.project.inScope.push('');
  }
  if (type === 'out') {
    state.project.outScope.push('');
  }
  render();
}

function render() {
  ReactDOM.render(<SoftwareRequirementsApp {...state} onAddScopeItem={onAddScopeItem} />, document.getElementById('root'));
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
