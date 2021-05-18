import axios from 'axios';

const key = 'AIzaSyCcY5ucarePlN7jkWEzRDpXOzWuLfr9mV4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: key
  }
})