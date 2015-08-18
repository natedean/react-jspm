import React from 'react';

export default class Repo extends React.Component {
  render(){
    return(
      <a href={ this.props.raw.html_url }>
        <h3>{ this.props.raw.name }</h3>
        <p>{ this.props.raw.description }</p>
      </a>
    )
  }

}