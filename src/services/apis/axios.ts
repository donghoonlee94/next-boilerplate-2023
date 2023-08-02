import axios from 'axios';
import { API_URL } from '../../../env';

const defaultInstance = axios.create({
  baseURL: API_URL,
  headers: {},
});

export default defaultInstance;
