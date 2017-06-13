import React from 'react';
import GithubUser from "./GithubUser.js";

class Following extends React.Component {

  constructor() {
    super();
    this.state = {
      following: []
    };
  }

  componentDidMount() {
    this.github();
  }

  github = () => {
    return fetch(`https://api.github.com/users/${this.props.params.username}/following`, {
      headers: {
        'Authorization': 'token 6be375e964b73997a44a7827bd6b0620ddae549c'
      }
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log('jsonResponse', jsonResponse)
        this.setState({following: jsonResponse})
      })

  }

  render() {
    if (!this.state.following) {
      return <div>LOADING FOLLOWING...</div>
    }

    return (
      <div className="following-page">
        <hr></hr>
        <h3 className="following__title">{this.props.params.username} is following:</h3>
        <div className="following__container">
        {this.state.following.map(function(follow) {
          // console.log(follower);
          return <GithubUser user={follow} key={follow.id}/>
        })}
        </div>
      </div>
    )
  }

}

export default Following;
