import fetch from 'isomorphic-fetch';
import qs from 'query-string';
import { HOST } from '../config';

/**
 * @function signup
 * @param {object} payload
 * @return {Object} -
 */

const signup = async (payload) => {
  try {
    const url = `${HOST}/auth/signup`;
    const bodyStringified = qs.stringify(payload);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyStringified,
    });
    const json = await res.json();
    return { ...json };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 400,
      error: 'Something went wrong, please try again...',
    };
  }
}

export default signup;
