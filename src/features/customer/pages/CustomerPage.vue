<template>
  <div class="container">
    <h1>Customer Details</h1>
  </div>
  <div v-if="customer" class="card">
    <!-- Botón para volver -->
    <button class="back-button" @click="goBack">⬅️ Back to Customers</button>

    <!-- Tabla con los detalles del cliente -->
    <table class="details-table">
      <tbody>
        <tr>
          <th>ID:</th>
          <td>{{ customer._id }}</td>
        </tr>
        <tr>
          <th>Name:</th>
          <td>{{ customer.givenName }} {{ customer.familyName1 }}</td>
        </tr>
        <tr>
          <th>Email:</th>
          <td>{{ customer.email }}</td>
        </tr>
        <tr>
          <th>Phone:</th>
          <td>{{ customer.phone }}</td>
        </tr>
      </tbody>
    </table>

    <!-- Tabla con los productos contratados -->
    <h2>Products</h2>
    <table class="products-table" v-if="customerProducts.length">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Type</th>
          <th>Speed (MB)</th>
          <th>Data (GB)</th>
          <th>Number</th>
          <th>Sold At</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in customerProducts" :key="product._id">
          <td>{{ product.productName }}</td>
          <td>{{ product.productTypeName }}</td>
          <td>{{ product.mbSpeed || "-" }}</td>
          <td>{{ product.gbData || "-" }}</td>
          <td>{{ product.numeracioTerminal }}</td>
          <td>{{ product.soldAt }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>No products available for this customer.</p>
  </div>
  <p v-else class="loading">Loading customer details...</p>
</template>

<script setup lang="ts">
// Importaciones
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

// Dependencias
import { useCustomerStore } from "../../../stores/useCustomerStore";
import type { CustomerType } from "../../../types/customer";
import { useProductApi } from "../../product/hooks/productApi";
import type { ProductType } from "../../../types/products";

const route = useRoute();
const router = useRouter();
const store = useCustomerStore();
const { loadProductsByCustomerId } = useProductApi();

// Variables reactivas
const id = Number(route.params.id);

// Computed
const customer = computed<CustomerType | undefined>(() => {
  return store.customers.find((customer: CustomerType) => customer._id === id);
});

const customerProducts = ref<ProductType[]>([]);

// Metodos
const loadCustomerProducts = async () => {
  const response = await loadProductsByCustomerId(customer!.value!.customerId);
  if (response) {
    customerProducts.value = response;
  }
};
const goBack = () => {
  router.push("/customers");
};

// Efectos
onMounted(loadCustomerProducts);
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: var(--background-light, #ffffff);
  color: var(--text-color-dark, #213547);
  text-align: center;
}

h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.card {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--background-light, #ffffff);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  position: relative;
}

.details-table,
.products-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.details-table th,
.products-table th {
  text-align: left;
  font-weight: bold;
  padding: 10px 15px;
  background-color: var(--primary-color, #646cff);
  color: #fff;
}

.details-table td,
.products-table td {
  padding: 10px 15px;
  color: var(--text-color-dark, #213547);
  background-color: var(--background-light, #ffffff);
  border-bottom: 1px solid #ddd;
}

.products-table th,
.products-table td {
  text-align: center;
}

.products-table tr:last-child td {
  border-bottom: none;
}

.back-button {
  display: inline-block;
  margin-bottom: 20px;
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  font-weight: bold;
  color: var(--background-light, #ffffff);
  background-color: var(--primary-color, #646cff);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.back-button:hover {
  background-color: var(--primary-hover, #535bf2);
}

.back-button:focus {
  outline: 2px solid var(--primary-hover, #535bf2);
}

.loading {
  text-align: center;
  font-size: 1.2rem;
  color: var(--primary-color, #646cff);
}
</style>
