
import Prouduct from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js"

export const getProducts = async (req, res) => {
  try {
    const products = await Prouduct.find();

    const productsWithStats = await Promise.all(
      products.map(async (product) => {
        const stat = await ProductStat.find({
          productId: product._id,
        });
        return {
          ...product._doc,
          stat,
        };
      })
    );
    res.status(200).json(productsWithStats)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//aggregate function combine two databases and can make a query that will combine information together
//Aggregate is like joins and union in sql 


export const getCustomers =  async(req, res) =>{
  try {
    const customers = await User.find({role: "user"}).select("-password")
    res.status(200).json(customers)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
} 