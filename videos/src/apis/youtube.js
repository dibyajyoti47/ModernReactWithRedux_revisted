import axios from "axios";

const KEY = "AIzaSyBT6-Tt-q7QSF-JcVzmUSU6EXVq4Y1AqJw";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
