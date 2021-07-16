import axios from "axios";

const caller = axios.create({ baseURL: "https://www.breakingbadapi.com/api/" });

const endpoints = {
  characters: "characters",
};

export { caller, endpoints };
