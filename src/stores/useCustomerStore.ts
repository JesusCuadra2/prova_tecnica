import { defineStore } from "pinia";
import type { CustomerType } from "../types/customer";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    customers: [] as Array<CustomerType>,
  }),
  actions: {
    setCustomers(customers: typeof this.customers) {
      this.customers = customers;
    },
  },
});
