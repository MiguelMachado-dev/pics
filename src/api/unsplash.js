import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID a8dcf6b18aeb5c39a893a344dd47143cffbe6808ac2a1ceb656cbfb3b5962b03"
  }
});
