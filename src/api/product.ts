import baseInstance from ".";

export const getProducts = async (skip: number, limit: number) => {
  const { data } = await baseInstance.get(
    `/products?skip=${skip}&limit=${limit}`
  );
  return data;
};

export const getProductById = async (id: number) => {
  const { data } = await baseInstance.get(`/products/${id}`);

  return data;
};
