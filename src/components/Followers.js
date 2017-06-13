import React from 'react';
import GithubUser from "./GithubUser.js";

class Followers extends React.Component {

  constructor() {
    super();
    this.state = {
      followers: []
    };
  }

  componentDidMount() {
    this.github();
  }

  github = () => {
    return fetch(`https://api.github.com/users/${this.props.params.username}/followers`, {
      headers: {
        'Authorization': 'token 6be375e964b73997a44a7827bd6b0620ddae549c'
      }
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log('jsonResponse', jsonResponse)
        this.setState({followers: jsonResponse})
      })

  }

  render() {
    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
    }

    return (
      <div className="followers-page">
        <hr></hr>
        <h3 className="followers__title">Followers of {this.props.params.username}</h3>
        <div className="followers__container">
        {this.state.followers.map(function(follower) {
          // console.log(follower);
          return <GithubUser user={follower} key={follower.id}/>
        })}
        </div>
      </div>
    )
  }

}

export default Followers;
