import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import '../styles/App.css';

import * as Routes from '../constants/routes';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';
import Login from './auths/Login';
import Home from './Home';
import Toast from './Toast';
import PageNotFound from './PageNotFound';

// Log the initial state
// console.log(store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() =>
  // console.log(store.getState())
// )

class App extends Component {
  state = {
    user: undefined,  // `undefined` signifies that we don't know yet if we are logged in or not
  }

  componentDidMount() {
    // initialize the user  
    const user = store.getState().authReducer.user;
    this.setState({ user });

    // listen to the user change
    store.subscribe(() => {
      const user = store.getState().authReducer.user;
      this.setState({ user });
      // console.log('user is', store.getState().authReducer.user);
    });
  }


  render() {
    const { user } = this.state;
    
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
            { // If we know for sure whether we are logged-in or not, try to match the route.
            user !== undefined 
              ? 
              <Switch>
                
                <PublicRoute path={Routes.LOGIN} component={Login} user={user} />
                <PrivateRoute path={Routes.HOME} component={Home} user={user} />

                {/* <PrivateRoute path={Routes.BRAND + '/:brandId'} component={Brand} user={user}/> */}
                
                <Route path='*' exact={true} component={PageNotFound} />

              </Switch>
              : <div>loading</div>
            }
            
          </BrowserRouter>
          <Toast />
        </div>  
      </Provider>
    );
  }
}

export default App;
