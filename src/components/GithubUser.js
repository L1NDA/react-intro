import React from 'react';
import { Link } from 'react-router';

class GithubUser extends React.Component {
  render() {
    return(
        <Link to={"/user/" + this.props.user.login} className="follower__single">
          <img src={this.props.user.avatar_url} className="followers__avatar"/>
          <div>{this.props.user.login}</div>
        </Link>
    )
  }
}

export default GithubUser;
