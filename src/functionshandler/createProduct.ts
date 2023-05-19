
import { Product } from "../databasemodels/product";
import { ProductInput } from "../schema";
export const createProduct = async (
    _: unknown,
    { input }: { input: ProductInput },
    context: any
  ) => {
    // Check for authentication
    if (!context) {
      throw new Error("Authentication required");
    }
    // Extract product details from input
    const { name, description, price, image } = input;
    // Create new product object
    const product = new Product({ name, description, price, image });
    // Save new product object to database
    await product.save();
    console.log(product);
    // Return the newly created product object
    return product;
  }
