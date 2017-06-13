import React from 'react';
import GithubRepo from "./GithubRepo.js";

class Repos extends React.Component {

  constructor() {
    super();
    this.state = {
      repos: []
    };
  }

  componentDidMount() {
    this.github();
  }

  github = () => {
    return fetch(`https://api.github.com/users/${this.props.params.username}/repos`, {
      headers: {
        'Authorization': 'token 6be375e964b73997a44a7827bd6b0620ddae549c'
      }
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log('jsonResponse', jsonResponse)
        this.setState({repos: jsonResponse})
      })

  }

  render() {
    if (!this.state.repos) {
      return <div>LOADING REPOS...</div>
    }

    return (
      <div className="repos-page">
        <hr></hr>
        <h3 className="repos__title">{this.props.params.username}{"'s repos"}</h3>
        <div className="repos__container">
        {this.state.repos.map(function(repo) {
          // console.log(repo);
          return <GithubRepo user={repo} key={repo.id}/>
        })}
        </div>
      </div>
    )
  }

}

export default Repos;
