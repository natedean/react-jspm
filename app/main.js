import React from 'react';

import {reposForUser} from './api';

import RepositoryList from './repository-list';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">Nate's Open Source Projects</h1>
        <RepositoryList />
      </div>
    )
  }
}

React.render(<HelloWorld />, document.body);
