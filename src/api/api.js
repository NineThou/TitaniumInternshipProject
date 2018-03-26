import axios from 'axios';
import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';


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

const config = {
  apiKey: 'AIzaSyAYhQNgycDJ_-Oru2EaAUc_j9oVFKk2ArI',
  authDomain: 'foodblog-4859b.firebaseapp.com',
  databaseURL: 'https://foodblog-4859b.firebaseio.com',
};
const app = firebase.initializeApp(config);
export const reduxSagaFirebase = new ReduxSagaFirebase(app);

// export const writePostData = (e, id, likes = 0) => {
//   const postData = { ...e, id, likes };
//   postsDatabase.push().set(postData);
// };

