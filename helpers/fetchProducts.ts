import { apiClient } from "./api-client";

export const fetchProducts = async () => {
  const { data } = await apiClient.get("/products");

  return data.products as IProduct[];
};
