import axios from 'axios';

const API_KEY = '20819091-08c8bb3eae10a910768ed4869';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const getImages = (searchQuery, currentPage = 1) => {
   return axios
   .get(`?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,)
   .then(res => res.data.hits);
}

const imageApi = { getImages };

export default imageApi;