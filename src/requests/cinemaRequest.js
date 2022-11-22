import axios from "axios";

import api from "./api"

const cinemaRequest = async (cinemaId) => {
  try {
    const response = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${cinemaId}?api_key=${api}&language=ru-RU`
      );
    return response;
  } catch (error) {
    if (error.response) {
      console.log(error.response.data.status_message);
      console.log(error.response.status);
    } else {
      console.log("Error", error.message);
    }
  }
};

export default cinemaRequest;
