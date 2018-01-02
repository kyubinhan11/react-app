import React, { Component } from 'react';

class PageNotFound extends Component {
  render() {
    return (
      <div className="not-found-container">
        <div>
          <div className="title">Error 404</div>
          <div className="content">Woops. Looks like this page doesn't exist </div>   
        </div>
      </div>
    );
  }
}

export default PageNotFound;