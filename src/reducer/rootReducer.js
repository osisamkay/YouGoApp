import {actionType} from '../actions/ActionType';

const {
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_ERROR,
  LOGIN_SUCCESS,
} = actionType;

const initialState = {
  email: '',
  isLogged: false,
  userData: {},
  registration: false,
  registrationMessage: '',
  regError: '',
};

export const rootReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case REGISTRATION_SUCCESS:
      return {...state, registrationMessage: payload, registration: true};
    case REGISTRATION_ERROR:
      return {...state, regError: payload, registration: false};
    case LOGIN_ERROR:
      return {...state, hobby: payload};
    case LOGIN_SUCCESS:
      return {...state, userData: payload, isLogged: true};
    case 'submit':
      return {list: [...state.list, payload]};
    default:
      return state;
  }
};
