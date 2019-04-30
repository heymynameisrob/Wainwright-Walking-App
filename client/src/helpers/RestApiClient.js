import axios from 'axios';
import FireStoreParser from 'firestore-parser';

const API_HOST = process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : 'https://node-api-24f2f.firebaseapp.com';

export async function getWalks() {
  // fetch data from a url endpoint
  const res = await axios(`${API_HOST}/api/v1/walks`);
  const data = await res.data;

  return data
}

export async function authRoute(token) {
  // fetch data from a url endpoint
  const res = await axios(`${API_HOST}/api/v1/walks`, { headers: { "Authorization": `Bearer ${token}` } });
  const data = await res.data;

  return data
}

