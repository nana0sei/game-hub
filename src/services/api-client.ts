import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4bc112312b3c4a2485fdd4fa1f7f0e59",
  },
});
