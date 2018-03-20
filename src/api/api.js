import axios from 'axios';
import { getAccessToken } from '../utils/AuthService';

const BASE_URL = 'http://localhost:7777';

export function getUsersData() {
  const url = `${BASE_URL}/api/users`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);
}

export function getEventsData() {
  const url = `${BASE_URL}/api/events`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);
}

export function getPostsData() {
  const url = `${BASE_URL}/api/posts`;
  return axios.get(url, { headers: { Authorization: `Bearer ${getAccessToken()}` } }).then(response => response.data);
}

