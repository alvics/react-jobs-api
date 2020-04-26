import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class GithubJobs extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios
      .get('https://jobs.github.com/positions.json?description=2020')
      // use arrow funct. because of (this.setState)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          posts: response.data.slice(0, 10) // show first 10 in state
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { posts } = this.state;

    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={post.company_logo} alt={post.title} />
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title red-text center">{post.title}</span>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">
        <div className="preloader-wrapper active">
          <div className="spinner-layer spinner-red-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </div>
    );

    return (
      <div className="container github">
        <h2>{postList}</h2>
      </div>
    );
  }
}
