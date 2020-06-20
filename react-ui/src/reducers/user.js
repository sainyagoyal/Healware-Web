import {
  USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE, USER_SIGNOUT,
} from '../constants/users';

import localStoreWrite from '../api/browser/localStoreWrite';
import localStoreRemove from '../api/browser/localStoreRemove';
import cookieWrite from '../api/browser/cookieWrite';
import cookieRemoveAll from '../api/browser/cookieRemoveAll';

const initialState = {
  error: '',
  isSignedIn: false,
};

let initialUserState;

const userData = window.localStorage.getItem('user');

if (typeof userData === 'object') {
  initialUserState = {
    ...initialState,
  };
} else {
  const payload = JSON.parse(userData);

  if (payload.isSignedIn === undefined) {
    initialUserState = {
      ...initialState,
      ...payload,
    };
  } else {
    initialUserState = {
      ...initialState,
      isSignedIn: true,
      ...payload,
    };
  }
}

function user(state = initialUserState, action) {
  switch (action.type) {

    case USER_SIGNIN_SUCCESS: {
      const { body } = action.payload;

      const newState = {
        ...state,
        ...body,
        isSignedIn: true
      };

      localStoreWrite('user', {
        isSignedIn: true,
        name: body.name,
        email: body.email,
        password: body.password
      });
      cookieWrite('isSignedIn', true);
      return newState;
    }

    case USER_SIGNIN_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        error
      };
    }

    case USER_SIGNUP_SUCCESS: {
      const { body } = action.payload;

      localStoreWrite('user', {
        name: body.name,
        email: body.email,
        password: body.password
      })
      cookieWrite('email', body.email);
      cookieWrite('name', body.name);
      cookieWrite('username', body.username);

      return {
        ...state,
        name: body.name,
        email: body.email,
        password: body.password,
        isSignedIn: false,
      };
    }

    case USER_SIGNUP_FAILURE: {
      const { error } = action.payload;

      return {
        ...initialUserState,
        error,
      };
    }

    case USER_SIGNOUT: {
      cookieRemoveAll();
      localStoreRemove('user');

      return initialState;
    }

    default:
      return state;
  }
}

export default user;
