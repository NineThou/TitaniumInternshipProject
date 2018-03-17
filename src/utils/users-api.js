import axios from 'axios';
import { getAccessToken } from './AuthService';

const BASE_URL = 'http://localhost:7777';

function getUsersData() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);
}

export default getUsersData;
