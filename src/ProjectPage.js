import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

function Project({ project }) {
  return (
    <div className="section">
      <TextField label="Project Name" value={project.name} />
    </div>
  );
}

function ScopeList({ scopeItems }) {
  return (
    <div>
      {scopeItems.map(item => (
        <div>
          <input className="form-control" value={item} />
        </div>
      ))}
    </div>
  );
}

function Scope({ inScope, outScope, onAddItem }) {
  return (
      <div className="section">
      <div className="row">
        <div className="col-12">
          <Typography variant="h6" gutterBottom>Scope</Typography>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div>
            <label>In Scope</label>
          </div>
          <ScopeList scopeItems={inScope} />
          <div>
          <Button  onClick={() => { onAddItem('in');}}>
            Add Item
          </Button>
        </div>
        </div>

        <div className="col-6">
          <div>
            <label>Out of Scope</label>
          </div>
          <ScopeList scopeItems={outScope} />
          <div>
        <Button  onClick={() => { onAddItem('out');}}>
            Add Item
          </Button>
        </div>          
        </div>
      </div>
      </div>
  );
}
Scope.propTypes = {
  inScope: PropTypes.arrayOf(PropTypes.string).isRequired,
  outScope: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAddItem: PropTypes.func.isRequired
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

function ProjectPage({project, onAddScopeItem}) {
  return (
    <div className="container">
      <h3>Software Requirements</h3>
      <div className="col-md-12">
        <Project project={project} />
        <BusinessGoals />
        <StakeHolders />
        <Scope
          inScope={project.inScope}
          outScope={project.outScope}
          onAddItem={onAddScopeItem}
        />
        <Constraints />
      </div>
    </div>
  );
} 

export default ProjectPage;