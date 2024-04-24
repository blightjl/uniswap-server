import * as dao from "./productDao.js";

export default function UserRoutes(app) {
  const createProduct = async (req, res) => {
    const user = await dao.createProduct(req.body);
    res.json(user);
  };

  const deleteProduct = async (req, res) => {
    const status = await dao.deleteProduct(req.params.productId);
    res.json(status);
  };

  const findAllProducts = async (req, res) => {
    const users = await dao.findAllProducts();
    res.json(users);
  };

  const findProductByName = async (req, res) => {
    const user = await dao.findProductByName(req.params.productName);
    res.json(user);
  };

  const updateProduct = async (req, res) => {
    const { productId } = req.params;
    console.log(req.body)
    const status = await dao.updateProduct(productId, req.body);
    res.json(status);
  };

  app.post("/api/products", createProduct);
  app.get("/api/products", findAllProducts);
  app.get("/api/products/:productName", findProductByName);
  app.put("/api/products/:productId", updateProduct);
  app.delete("/api/products/:productId", deleteProduct);
}
