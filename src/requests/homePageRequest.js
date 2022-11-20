import axios from "axios";
const api = process.env.API

const homePageRequest = (adult = false, page = 1) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=ru-RU&sort_by=popularity.desc&include_adult=${adult}&include_video=true&page=${page}&with_watch_monetization_types=flatrate`
    )
    .then((response) => response.data);
};

export default homePageRequest;
