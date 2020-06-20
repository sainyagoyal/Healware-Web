import {
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
} from '../../constants/users';

/**
 * @function signupSuccess
 * @param {Object} payload
 * @return {Object}
 */
export const signupSuccess = (payload) => ({
  type: USER_SIGNUP_SUCCESS,
  payload,
});

/**
 * @function signupFailure
 * @param {Object} payload
 * @return {Object}
 */
export const signupFailure = (payload) => ({
  type: USER_SIGNUP_FAILURE,
  payload,
});
