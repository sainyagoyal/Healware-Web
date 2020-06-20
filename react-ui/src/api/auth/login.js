import fetch from 'isomorphic-fetch';
import qs from 'querystring';
import { HOST } from '../config';

/**
 * @function signin
 * @param {object} payload
 * @return {Object} -
 */

async function signin(payload) {
  try {
    const url = `${HOST}/auth/login`;
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

export default signin;