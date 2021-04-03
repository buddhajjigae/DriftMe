import axios from 'axios';
const API_KEY = 'API-KEY HERE'
const MAX_SEARCH_RESULTS = 10;

export default axios.create({
  baseURL: 'http://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: MAX_SEARCH_RESULTS,
    key: API_KEY,
  },
});
