import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "92a99d63dd024be0bda5b8550959d46d",
  },
});
