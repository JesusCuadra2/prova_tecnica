import { defineStore } from "pinia";
import type { ProductType } from "../types/products";

export const useProductStore = defineStore("customer", {
  state: () => ({
    products: [] as Array<ProductType>,
  }),
  actions: {
    setProducts(products: ProductType[]) {
      this.products = products;
    },
  },
});
