import axios from 'axios';

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_RADIO_API}api`,
});

export default api;
