

//676edcf3a0msh0a0967b89d09a25p133898jsnc71a50c5596e   resume use

const axios = require("axios");
// const fetch = require('node-fetch');
export const exerciseOptions  = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'"Rapid api Key' ,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


// export const youtubeOptions = {
//   method: 'GET',
  
//   headers: {
//     'X-RapidAPI-Key': '0a4c9c3ad2msh9b36b24357f5bbcp1b00c5jsn61d78be2afff',
//     'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
//   }
// };


export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '0a4c9c3ad2msh9b36b24357f5bbcp1b00c5jsn61d78be2afff',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData =async (url , options) => {
    const  response  = await fetch(url , options);
    const data = await response.json();
    return data;

}
