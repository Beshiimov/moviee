import axios from "axios";
const api = process.env.API

const searchRequest = (search, adult = false, page = 1) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=ru-RU&page=${page}&query=${search}&include_adult=${adult}`
    )
    .then((response) => response.data);
};

export default searchRequest;
