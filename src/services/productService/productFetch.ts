import type { ProductType } from "../../types/products";

const products: ProductType[] = [
  {
    _id: 1111111,
    productName: "FIBRA 1000MB",
    mbSpeed: 1000,
    gbData: null,
    productTypeName: "ftth",
    numeracioTerminal: 933933933,
    soldAt: "2019-01-09 14:26:17",
    customerId: "11111",
  },
  {
    _id: 1111112,
    productName: "MOBIL 500GB",
    mbSpeed: null,
    gbData: 500,
    productTypeName: "4G",
    numeracioTerminal: 696696969,
    soldAt: "2020-08-01 18:30:27",
    customerId: "11111",
  },
];

export function fetchProducts(): Promise<ProductType[]> {
  return Promise.resolve(products);
}

export function fetchProductsByCustomer(
  customerId: string
): Promise<ProductType[]> {
  return new Promise((resolve) => {
    const customerProducts = products.filter(
      (product) => product.customerId === customerId
    );
    resolve(customerProducts);
  });
}
