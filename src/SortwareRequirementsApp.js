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
      { scopeItems.map((item) => <input value={item}/>) }
    </div>
  );
}

function Scope() {
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
          <textarea />
        </div>
        <div className="col-6">
          <div>
            <label>Out of Scope</label>
          </div>
          <textarea />
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
        <Scope />
        <Constraints />
      </div>
    </div>
  );
}

export default SoftwareRequirementsApp;
