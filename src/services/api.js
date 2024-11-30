import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export const getProducts = () => api.get("/products");
export const getProductDetails = (id) => api.get(`/products/${id}`);

export default api;
