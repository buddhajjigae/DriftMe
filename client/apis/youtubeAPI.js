import axios from 'axios';
// const API_KEY = 'AIzaSyC-InxCAw2BLHrw2mkE4tFYwjXSMHe_xDY'; late4ren
const API_KEY = 'AIzaSyAUkhed1g17GHTqDqFapKi_4hy2Oy4UL_I'; // buddhajjigae
const MAX_SEARCH_RESULTS = 10;

export default axios.create({
  baseURL: 'http://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: MAX_SEARCH_RESULTS,
    key: API_KEY,
  },
});
