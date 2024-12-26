import { fetchCustomers } from "../../../services/customerServices/customerFetch";
import { useCustomerStore } from "../../../stores/useCustomerStore";

export function useCustomerApi() {
  const store = useCustomerStore();

  const loadCustomers = async () => {
    const customers = await fetchCustomers();
    store.setCustomers(customers);
  };

  return {
    loadCustomers,
  };
}
