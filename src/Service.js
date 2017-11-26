import Axios from 'axios';
const getMoviesFromApiAsync = () => {
    return Axios.get('https://pastebin.com/raw/xS0VZJxr')
    .then(function (response) {
    console.log(response);
    })
    .catch(function (error) {
    console.log(error);
    });
  };

export const getMoviesFromLocalJson = (json, callback = function(){}) => {
    callback(json);
};  

