import qs from 'qs';
const BASE_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: process.env.VUE_APP_CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${BASE_URL}/oauth2/authorize?${qs.stringify(
      queryString
    )}`;
  },
};
