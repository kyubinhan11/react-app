import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';

import '../styles/App.css';
import * as Routes from '../constants/routes';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './auths/Login';
import Home from './Home';
import Toast from './Toast';
import PageNotFound from './PageNotFound';

import Auth from '../handlers/auth';
import { logout } from '../actions/authActions';

export class App extends Component {
  componentDidMount() {
    Auth.registerAxiosInterceptor(this.props.logout);
  }

  render() {
    const { user } = this.props;
    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            
            <PublicRoute path={Routes.LOGIN} component={Login} user={user} />
            <PrivateRoute path={Routes.HOME} component={Home} user={user} />

            {/* <PrivateRoute path={Routes.BRAND + '/:brandId'} component={Brand} user={user}/> */}
            
            <Route path='*' exact={true} component={PageNotFound} />

          </Switch>
        </BrowserRouter>
        <Toast />
      </div>  
    );
  }
}

const mapStateToProps = state => {
  const { user } = state.authReducer;
  
  return {
    user
  };  
};

export default connect (
  mapStateToProps, { logout }
)(App)
