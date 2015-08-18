import React from 'react';

import {reposForUser} from './api';

import Repo from './repo';

export default class RepositoryList extends React.Component {
  constructor(props){
    super(props);
    this.state = { repos: [] };
  }
  componentDidMount(){
    reposForUser('natedean').then((repos)=>{
      this.setState({ repos: repos })
    });
  }
  render() {
    var repos = this.state.repos.map((repo)=>{
      return <li key={repo.id} className="repo"><Repo raw={repo}/></li>
    });
    return <ul>{ repos }</ul>;
  }
}
