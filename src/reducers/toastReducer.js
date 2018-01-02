import {
  OPEN_TOAST_MESSAGE,
  CLOSE_TOAST_MESSAGE
} from '../constants/actionTypes';

const toastReducer = (state = {
  close: true,
  success: false,
  error: true,
  message: ''
}, action) => {
  switch (action.type) {
    case OPEN_TOAST_MESSAGE:
      return {
        ...state,
        close: action.close,
        success: action.success,
        error: action.error,
        message: action.message,
      }
    case CLOSE_TOAST_MESSAGE:
      return {
        ...state,
        close: action.close,
      }
    default:
      return state
  }
};

export default toastReducer;