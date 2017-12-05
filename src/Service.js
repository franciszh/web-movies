import Axios from 'axios';
export const getMoviesFromApiAsync = () => {
    return Axios.get('/data.json');
  }; 

