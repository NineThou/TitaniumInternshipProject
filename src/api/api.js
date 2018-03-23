import axios from 'axios';

const BASE_URL = 'https://foodblog-4859b.firebaseio.com/node';
const DATABASE_SECRET = 'LioBOBggnzDQZntQWi7XRsuYKXEMRC8YIQpU1UMl';

export function getUsersData() {
  const url = `${BASE_URL}/users.json?auth=${DATABASE_SECRET}`;
  return axios.get(url).then(response => response.data);
}

export function getEventsData() {
  const url = `${BASE_URL}/events.json?auth=${DATABASE_SECRET}`;
  return axios.get(url).then(response => response.data);
}

export function getPostsData() {
  const url = `${BASE_URL}/posts.json?auth=${DATABASE_SECRET}`;
  return axios.get(url).then(response => response.data);
}

