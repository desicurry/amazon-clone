import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://us-east1-clone-32a78.cloudfunctions.net/api'
    // "http://localhost:5001/clone-32a78/us-east1/api",
});

export default instance;