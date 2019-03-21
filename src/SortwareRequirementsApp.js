import React from 'react';
import './App.css';
import './bootstrap.min.css';

function Project({ project }) {
  return (
    <div className="row">
      <label>Project Name</label>
      <input value={project.name} />
    </div>
  );
}

function ScopeList({scopeItems}) {
  return (
    <div>
      { scopeItems.map((item) => 
        <div>
          <input value={item}/>
      </div> )}
    </div>
  );
}

function Scope({inScope, outScope}) {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <label>Scope</label>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <label>In Scope</label>
          </div>
          <ScopeList scopeItems={inScope} />
        </div>
        <div className="col-6">
          <div>
            <label>Out of Scope</label>
          </div>
          <ScopeList scopeItems={outScope} />
        </div>
      </div>
    </div>
  );
}

function StakeHolders() {
  return <div />;
}

function BusinessGoals() {
  return <div />;
}

function Constraints() {
  return <div />;
}

function SoftwareRequirementsApp({ project }) {
  return (
    <div className="container">
      <h3>Software Requirements</h3>
      <div className="col-md-12">
        <Project project={project} />
        <BusinessGoals />
        <StakeHolders />
        <Scope inScope={project.inScope} outScope={project.outScope}/>
        <Constraints />
      </div>
    </div>
  );
}

export default SoftwareRequirementsApp;
