import axios from "axios";

const api = process.env.API

const cinemaRequest = (cinemaId) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${cinemaId}?api_key=${api}&language=ru-RU`
    )
    .then((response) => response)
    .catch(function (error) {
      if (error.response) {
        console.log(error.response.data.status_message);
        console.log(error.response.status);
      } else {
        console.log("Error", error.message);
      }
    });
};

export default cinemaRequest;
