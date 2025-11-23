import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;

    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        "Content-Type": "application/json",
      },
    });

    // 🔥 Attach token automatically before every request
    this.client.interceptors.request.use((config) => {
      const token = localStorage.getItem("admin_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    // 🔥 Handle 401 errors automatically
    this.client.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem("auth_token");
          window.location.href = "/login"; // redirect to login page
        }
        return Promise.reject(error);
      }
    );
  }

  // GET request
  get(endpoint) {
    return this.client.get(endpoint);
  }

  // POST request
  post(endpoint, data) {
    return this.client.post(endpoint, data);
  }

  // PUT request
  put(endpoint, data) {
    return this.client.put(endpoint, data);
  }

  // DELETE request
  delete(endpoint) {
    return this.client.delete(endpoint);
  }

  // 🔥 Login API — store token
  login(credentials) {
    return this.client.post("/auth/login", credentials)
      .then((res) => {
        localStorage.setItem("auth_token", res.data.token);
        return res;
      });
  }

  // 🔥 Logout API — remove token
  logout() {
    localStorage.removeItem("auth_token");
  }
}

const apiClient = new ApiClient();
export default apiClient;
