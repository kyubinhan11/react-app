// import validator from 'validator';
// import Strings from './constants/Strings.jsx';
// import { toastMessage } from './actions/toastActions.jsx';

// class Handler {
//   constructor() {
//     if(!Handler.instance) {
//       this._handler = {
//         toastTimeout: undefined
//       };
//       Handler.instance = this;
//     }
//     return Handler.instance;
//   }

//   getUserStatus(status) {
//     if(status === 1) {
//       return "Active";
//     } else {
//       return "Inactive";
//     }
//   }

//   handleNullableField(field) {
//     return field || "Not provided";
//   }

//   toastMessage(openToastMessage, closeToastMessage, timeout) {
//     // unregister the timeout to prevent from closing
//     if(this._handler.toastTimeout) {
//       clearTimeout(this._handler.toastTimeout);
//     }
//     // close the previous message if it was presented
//     closeToastMessage();
    
//     // open a new message
//     openToastMessage();
  
//     this._handler.toastTimeout = setTimeout(() => {
//       closeToastMessage();
//     }, timeout);
//   }

//   handleErrorMessage(err) {
//     if (err.response) {
//       if (err.response.data) {
//         return err.response.data.message;
//       } else {
//         return err.response.message;
//       }
//     } else if (err.message) {
//       return err.message;
//     } else {
//       return "An unexpected error occurred";
//     } 
//   }

//   handleResponse(response) {
//     if (response.data.status === 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   validateEmail(email, errors) {
//     let errorsFound = false;
//     if (!validator.isEmail(email)) {
//       errorsFound = true;
//       errors['email'] = Strings.INVALID_EMAIL_FORMAT;
//     }

//     return errorsFound;
//   }

//   isPasswordLongEnough(fieldName, password, errors, min = 8) {
//     let errorsFound = false;
    
//     if (!validator.isLength(password, {min, max: undefined})) {
//       errorsFound = true;

//       if (errors[fieldName] instanceof Array) {
//         errors[fieldName].push(Strings.SHORT_PASSWORD);
//       } else {
//         errors[fieldName] = Strings.SHORT_PASSWORD;
//       }
//     }

//     return errorsFound;
//   }

//   validatePassword(...args) {
//     let errorsFound = false;
    
//     if(args.length === 3) {
//       const fieldName = args[0]; 
//       const password = args[1]; 
//       const errors = args[2];
      
//       errorsFound = this.isPasswordLongEnough(fieldName, password, errors);
    
//     } else if(args.length === 5) {
//       const firstField = args[0];
//       const secondField = args[1];
//       const firstPassword = args[2];
//       const secondPassword = args[3];
//       const errors = args[4];

//       errors[firstField] = [];
//       errors[secondField] = [];

//       if(!validator.equals(firstPassword, secondPassword)) {
//         errors[firstField].push(Strings.PASSWORD_NOT_MATCH);
//         errors[secondField].push(Strings.PASSWORD_NOT_MATCH);
//       }
      
//       this.isPasswordLongEnough(firstField, firstPassword, errors);
      
//       this.isPasswordLongEnough(secondField, secondPassword, errors);

//       if(errors[firstField].length === 0) {
//         delete errors[firstField];
//       } else {
//         errorsFound = true
//       }
      
//       if(errors[secondField].length === 0) {
//         delete errors[secondField];
//       } else {
//         errorsFound = true
//       }
//     }

//     return errorsFound;
//   }

//   validateRequiredField(fieldName, field, errors) {
//     let errorsFound = false;
//     if(validator.isEmpty(field)) {
//       errorsFound = true;
//       errors[fieldName] = Strings.FIELD_REQUIRED;
//     }
//     return errorsFound;
//   }

// }

// const instance = new Handler();
// Object.freeze(instance);

// export default instance;