import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

const {
  data: {results},
} = await axios.get(API_URL);

console.log(results[0]);
