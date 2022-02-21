import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_AUTH_API,
  timeout: 3000,
  headers: { "Content-Type": "application/json" },
  accessControlAllowCredentials: true,
});

api.interceptors.request.use((config) => {
  // Do something before request is sent
  const newConfig = { ...config };
  newConfig.data = JSON.stringify(config.data);
  return newConfig;
});

api.interceptors.response.use(
  (response) => {
    // If user is Unauthorized to this request
    if (response.status === 401) {
      alert("Unauthorized request");
      window.location =
        window.location.protocol + "//" + window.location.host + "/login";
    }
    return response;
  }
);

export default api;
