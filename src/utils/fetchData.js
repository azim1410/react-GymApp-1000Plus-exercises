  // export const exerciseOptions = {
    
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'fe4947b9d4msh6121782d1a46694p1344abjsn3ed7689fdd94',
//     'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//   }
// };

// 4e7b91b7aemshdea0b095afd31e6p1f2921jsn9847a30714f0

// '0a4c9c3ad2msh9b36b24357f5bbcp1b00c5jsn61d78be2afff' azimadamani.01

// a6ead608cemshce7d49a19ca08fbp12ebd4jsn2b8362044c61

//676edcf3a0msh0a0967b89d09a25p133898jsnc71a50c5596e   resume use

const axios = require("axios");
// const fetch = require('node-fetch');
export const exerciseOptions  = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key':'a6ead608cemshce7d49a19ca08fbp12ebd4jsn2b8362044c61' ,
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