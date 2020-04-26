import React from 'react';

export default function Footer() {
  return (
    <footer className="page-footer grey darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">Web Dev Jobs 4 U</h5>
            <p className="grey-text text-lighten-4">
              Thanks for stopping by and checking us out, til next time!
            </p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Work Remotely</h5>
            <ul>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://remoteworkaustralia.com.au/github_job/devops-engineer-ea39ddb8-6c91-422e-91fa-4fcc46a09426/"
                >
                  DevOps Engineer
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://remoteworkaustralia.com.au/github_job/python-react-software-engineer-9e6d1d24-9287-4059-9f0d-e32f09c7e6bf/"
                >
                  Python/React
                </a>
              </li>
              <li>
                <a className="grey-text text-lighten-3" href="Full-Stack .NET">
                  Full-Stack .NET
                </a>
              </li>
              <li>
                <a
                  className="grey-text text-lighten-3"
                  href="https://remoteworkaustralia.com.au/github_job/ruby-on-rails-developer-1cdb672e-43c6-437e-9e20-c7fa5a45af19/"
                >
                  Ruby on Rails Job
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright red darken-3">
        <div className="container">
          © 2020 All For Fun
          <a
            className="grey-text text-lighten-4 right"
            href="https://remoteworkaustralia.com.au/job_category/programming/"
          >
            Remote Jobs
          </a>
        </div>
      </div>
    </footer>
  );
}
