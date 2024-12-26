import { createRouter, createWebHistory } from "vue-router";

// Importar las vistas
import Home from "../features/dashboard/pages/Home.vue";
import CustomersPage from "../features/customer/pages/CustomersPage.vue";
import CustomerPage from "../features/customer/pages/CustomerPage.vue";

// Definir las rutas
const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/customers",
    name: "customers",
    component: CustomersPage,
  },
  {
    path: "/customer/:id",
    name: "customer",
    component: CustomerPage,
    props: true,
  },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
