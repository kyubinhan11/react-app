import { TOAST } from '../constants/reducerTypes';
import {
  OPEN_TOAST_MESSAGE,
  CLOSE_TOAST_MESSAGE
} from '../constants/actionTypes';
import Handler from '../utils/handler';

export const openToastMessage = (success, message) => {
  return {
    name: TOAST,
    type: OPEN_TOAST_MESSAGE,
    success,
    error: !success,
    message,
  }
}

export const closeToastMessage = () => {
  return {
    name: TOAST,
    type: CLOSE_TOAST_MESSAGE,
  }
}

const toastMessage = (success, message, timeout = 4000) => (dispatch) => {
  const open = () => { 
    dispatch(openToastMessage(success, message)); 
  }
  const close = () => {
    dispatch(closeToastMessage());
  }

  Handler.toastMessage(open, close, timeout);
}

export const toastErrorMessage = (err) => (dispatch) => {
  const errorMessage = Handler.handleErrorMessage(err);
  dispatch(toastMessage(false, errorMessage));
}

export const toastSuccessMessage = (message) => (dispatch) => {
  dispatch(toastMessage(true, message));
}