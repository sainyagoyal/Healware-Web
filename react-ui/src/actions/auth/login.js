import {
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAILURE,
} from '../../constants/users';

/**
 * @function signinSuccess
 * @param {Object} payload
 * @return {Object}
 */
export const signinSuccess = (payload) => ({
  type: USER_SIGNIN_SUCCESS,
  payload,
});

/**
 * @function signinFailure
 * @param {Object} payload
 * @return {Object}
 */
export const signinFailure = (payload) => ({
  type: USER_SIGNIN_FAILURE,
  payload,
});
