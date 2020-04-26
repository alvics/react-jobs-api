import React from 'react';
import Iframe from 'react-iframe';

export default function About() {
  return (
    <div className="container main about">
      <div
        className="card"
        style={{ marginTop: '50px', paddingBottom: '30px' }}
      >
        <div className="card-content">
          <h4 className="center">Hello from About page</h4>
          <p className="center">
            Technologies used are
            <strong className="tech">
              React, React router, Materialize css
            </strong>{' '}
            and
            <strong className="axios">axios</strong>.
          </p>
          <p className="center">
            A simple app, fetching data from the Githubs job API, displaying the
            list of current jobs and it's single details page.
          </p>
          <div className="center fb-iframe">
            <Iframe
              src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fewebdesigns%2F&width=450&layout=standard&action=like&size=small&show_faces=true"
              width="450"
              height="80"
              style={{
                margin: '30px auto',
                border: 'none !important',
                overflow: 'hidden'
              }}
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
