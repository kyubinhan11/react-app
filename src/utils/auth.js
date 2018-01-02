import axios from 'axios';

/*
  This is a helper class for authentication related methods
*/

class Auth {
  constructor() {
    if(!Auth.instance) {
      this._auth = {
        
      };

      Auth.instance = this;
    }
    return Auth.instance;
  }
  
  /*
    this methods is called immediately at the very beginning in the auth reducer 
    to initialize 'user' object in App.jsx. It checks whether 
    the user signs in previously by looking at localStorage and 
    it returns either null or an object retrieved from localStorage
  */
  getUserDataFromLocal() {
    let user = null;
    
    const localData = JSON.parse(localStorage.getItem('auth'));
    if(localData) {
      axios.defaults.headers.common['Authorization'] = "Bearer " + localData.access_token;
      user = {...localData.user_data};
    } 
  
    return user;
  }
  
  /*
    set auth header in Axios and store auth data in localstorage
    after succesfully signing in
  */
  onSignedIn(response) {
    localStorage.setItem('auth', JSON.stringify(response.data));
    axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.access_token;
  }
  

  /*
    delete auth header in axios and clear localStorage
    after signing out
  */
  onSignedOut() {
    delete axios.defaults.headers.common['Authorization']
    localStorage.clear();
  }

  /*
    update the new user data in localStorage 
    after succesfully update user profile in profileActions
  */
  onUserProfileChanged(newUserData) {
    const localData = JSON.parse(localStorage.getItem('auth'));
    if(localData) {
      localData.user_data = { ...newUserData };
      localStorage.setItem('auth', JSON.stringify(localData));
    }
  }
}

const instance = new Auth();
Object.freeze(instance);

export default instance;