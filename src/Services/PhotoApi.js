import axios from 'axios'
 require('dotenv').config()

export const getImage = async (search,currentPage) => {
        const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
        const params = `api_key=${process.env.REACT_APP_API_KEY}&text=${search}&format=json&nojsoncallback=1&per_page=12&page=${currentPage}`;
      return await axios.get(url+params)
       
}