import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 68727ac4ca782ce8a7c18e661ad15f7982661c6198b17aa02d76357df0e79f51",
  },
});
