import {
  fetchProducts,
  fetchProductsByCustomer,
} from "../../../services/productService/productFetch";
import { useProductStore } from "../../../stores/useProductStore";

export function useProductApi() {
  const store = useProductStore();

  const loadProduct = async () => {
    const products = await fetchProducts();
    store.setProducts(products);
  };

  const loadProductsByCustomerId = async (customerId: string) => {
    const products = await fetchProductsByCustomer(customerId);
    return products;
  };

  return {
    loadProduct,
    loadProductsByCustomerId,
  };
}
