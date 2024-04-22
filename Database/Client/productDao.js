import productModel from "./productModel.js";

export const createProduct = (product) => {
  delete product._id; 
  return productModel.create(product); 
}
export const findAllProducts = () => productModel.find();
export const findProductByName = (name) =>  productModel.findOne({ title: name });
export const findUserByCredentials = (username, password) =>  productModel.findOne({ username, password });
export const updateProduct = (productId, product) => productModel.updateOne({ _id: productId }, { $set: product });
export const deleteProduct = (productId) => productModel.deleteOne({ _id: productId });
