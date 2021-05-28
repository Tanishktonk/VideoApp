import axios from 'axios';

const key = 'AIzaSyD6Lc21yGYS2RPVZuehKp-lPX1A3-DYsUM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: key
  }
})
