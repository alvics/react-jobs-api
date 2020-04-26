import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {
  // set a state object
  state = {
    post: null
  };

  componentDidMount() {
    console.log(this.props);
    let id = this.props.match.params.job_id;

    axios.get(`https://jobs.github.com/positions/${id}.json`).then((res) => {
      this.setState({
        post: res.data
      });
      console.log(res);
    });
    this.setState({
      id: id
    });
  }

  render() {
    const post = this.state.post ? (
      <div
        className="post card"
        style={{ padding: '30px', margin: '50px 0px' }}
      >
        <div className="center singleJob">
          <img src={this.state.post.company_logo} alt={this.state.post.title} />
        </div>
        <h4 className="center" style={{ paddingBottom: '30px' }}>
          {this.state.post.title}
        </h4>
        <p
          dangerouslySetInnerHTML={{ __html: this.state.post.description }}
        ></p>
      </div>
    ) : (
      <div className="center" style={{ marginTop: '50px' }}>
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

    return <div className="container">{post}</div>;
  }
}
