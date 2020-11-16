import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 95wTulIbcxOKqsopqUnt-I1s4_wx9vMLm-T68n0f_9Y",
  },
});
