import axios from 'axios';
const url = process.env.VUE_APP_URL;
export default {
  login(credentials) {
    return axios
      .post(url + 'login/', credentials)
      .then(response => response.data)
      .catch(error => error.data.message)
  },
  signUp(credentials) {
    return axios
      .post(url + 'sign-up/', credentials)
      .then(response => response.data);
  },
  getSecretContent() {
    return axios.get(url + 'secret-route/').then(response => response.data);
  }
};