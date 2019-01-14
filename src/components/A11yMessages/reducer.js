import {
  setA11yError,
  clearA11yErrors
} from './actions';

const initialState = {
  errorMessages: []
}

function a11yErrors(state = initialState, action) {
  switch(action.type) {
    case setA11yError.toString():
      return Object.assign({}, state, {
        errorMessages: [action.payload]
      });
    case clearA11yErrors.toString():
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
}

export default a11yErrors
