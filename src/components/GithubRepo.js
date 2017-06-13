import React from 'react';

class GithubRepo extends React.Component {
  render() {
    return(
        <a href={"https://github.com/" + this.props.user.full_name} className="repo__single" target="_blank">
          <div>{this.props.user.full_name}</div><div className="stargazers">{this.props.user.stargazers_count} ★</div>
        </a>
    )
  }
}

export default GithubRepo;
