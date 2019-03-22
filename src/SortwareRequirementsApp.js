import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import HomePage from './HomePage'
import ProjectPage from './ProjectPage'
import './App.css';
import './bootstrap.min.css';

function Home() {
  return <HomePage></HomePage>
}


function SoftwareRequirementsApp({ project, onAddScopeItem }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Route exact path="/" component={Home}/>
        <Route path="/project" render={() => <ProjectPage {...project} onAddScopeItem={onAddScopeItem}></ProjectPage>} />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default SoftwareRequirementsApp;
