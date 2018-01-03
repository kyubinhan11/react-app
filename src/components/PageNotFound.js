import React, { Component } from 'react';
import { HOME } from '../constants/routes';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push(HOME);
    }, 10000);
  }

  render() {
    return (
      <div className="page-not-found-container">
        <div>
          <div className="title">Error 404</div>
          <div className="content">Woops. Looks like this page doesn't exist </div>
          <div className="link">
            <Link to={HOME}> Go to home </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;