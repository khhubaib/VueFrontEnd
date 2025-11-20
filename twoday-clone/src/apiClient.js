import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;

    // Create an axios instance
    this.client = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
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
}

const apiClient = new ApiClient();
export default apiClient;
