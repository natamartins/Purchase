export const Types = {
  ADD_PRODUCT: "ADD_PRODUCT",
};

export const Creators = {
  addProduct: (product, list) => ({
    type: "ADD_PRODUCT",
    product,
    list,
  }),
};
