import type { CustomerType } from "../../types/customer";

const customers = [
  {
    _id: 11111,
    docType: "nif",
    docNum: "11223344E",
    email: "it@parlem.com",
    customerId: "11111",
    givenName: "Enriqueta",
    familyName1: "Parlem",
    phone: "668668668",
  },
  {
    _id: 2,
    docType: "nif",
    docNum: "22334455E",
    email: "john.doe@example.com",
    customerId: "22222",
    givenName: "John",
    familyName1: "Doe",
    phone: "667667667",
  },
];

export function fetchCustomers(): Promise<CustomerType[]> {
  return Promise.resolve(customers);
}

export function fetchCustomerById(
  id: number
): Promise<CustomerType[][number] | undefined> {
  return new Promise((resolve) => {
    const customer = customers.find((customer) => customer._id === id);
    resolve(customer);
  });
}
