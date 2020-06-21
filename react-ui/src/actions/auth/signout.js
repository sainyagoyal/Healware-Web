import { USER_SIGNOUT } from '../../constants/users';

/**
 * @function signout
 * @param {Object} payload
 * @return {Object}
 */
export const signout = (payload) => ({
  type: USER_SIGNOUT,
  payload,
});
