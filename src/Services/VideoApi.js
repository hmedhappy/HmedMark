import axios from 'axios'
 require('dotenv').config()

export const getVideo = async (Url) => {
        console.log({url:`https://vimeo.com/api/oembed.json?url=${Url}`});
      return await axios.get(`https://vimeo.com/api/oembed.json?url=${Url}`)
      
}

