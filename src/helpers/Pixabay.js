import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const ACCESS_KEY = '30577317-d75a3c052a473ef5b40d5fa17';
export let page = 1;
export let query = null;
const params = `?key=${ACCESS_KEY}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12`;

export async function getPictures(query) {
  try {
    const response = await axios.get(
      `${BASE_URL}${params}&q=${query}&page=${page}`
    );

    return response.data.hits;
  } catch (error) {
    console.log(error);
  }
}
