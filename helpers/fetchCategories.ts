import { apiClient } from "./api-client";

export const fetchCategories = async () => {
  const { data } = await apiClient.get("/categories");
  console.log(data);
};
