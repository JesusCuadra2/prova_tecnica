<template>
  <div class="container">
    <h1>Customer List</h1>
  </div>

  <!-- Campo de búsqueda -->
  <div style="margin-bottom: 1rem">
    <el-input
      v-model="searchTerm"
      placeholder="Buscar"
      clearable
      prefix-icon="el-icon-search"
    />
  </div>

  <div>
    <el-table
      :data="filteredAndSortedCustomers"
      style="width: 100%"
      @sort-change="handleSortChange"
      @row-click="handleClickLine"
    >
      <el-table-column
        prop="_id"
        label="ID"
        width="50"
        sortable
      ></el-table-column>
      <el-table-column
        prop="givenName"
        label="Given Name"
        sortable
      ></el-table-column>
      <el-table-column
        prop="familyName1"
        label="Family Name"
        sortable
      ></el-table-column>
      <el-table-column prop="email" label="Email" sortable></el-table-column>
      <el-table-column prop="phone" label="Phone" sortable></el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
//Importaciones
import { ref, computed, onMounted } from "vue";
import { useCustomerApi } from "../hooks/customerApi";
import { useCustomerStore } from "../../../stores/useCustomerStore";
import { useRouter } from "vue-router";

//Dependencias
const store = useCustomerStore();
const router = useRouter();
const { loadCustomers } = useCustomerApi();

//Variables reactivas
const sortKey = ref<string | null>(null);
const sortOrder = ref<"ascending" | "descending" | null>(null);
const searchTerm = ref<string>("");

//Computed
const customers = computed(() => store.customers);

const filteredAndSortedCustomers = computed(() => {
  let filtered = customers.value;

  if (searchTerm.value.trim()) {
    const lowerSearch = searchTerm.value.toLowerCase().trim();
    filtered = filtered.filter((c) => {
      return (
        c._id?.toString().includes(lowerSearch) ||
        c.givenName?.toLowerCase().includes(lowerSearch) ||
        c.familyName1?.toLowerCase().includes(lowerSearch) ||
        c.email?.toLowerCase().includes(lowerSearch) ||
        c.phone?.toLowerCase().includes(lowerSearch)
      );
    });
  }

  if (!sortKey.value || !sortOrder.value) {
    return filtered;
  }

  return [...filtered].sort((a, b) => {
    const aValue = a[sortKey.value as keyof typeof a];
    const bValue = b[sortKey.value as keyof typeof b];

    if (sortOrder.value === "ascending") {
      return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
    } else {
      return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
    }
  });
});

//Metodos
const handleSortChange = (sort: { prop: string; order: string | null }) => {
  sortKey.value = sort.prop;
  sortOrder.value = sort.order === "ascending" ? "ascending" : "descending";
};

const handleClickLine = (row: { _id: number }) => {
  router.push({ name: "customer", params: { id: row._id } });
};

//Efectos
onMounted(async () => {
  await loadCustomers();
});
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  background-color: var(--background-light, #ffffff);
  color: var(--text-color-dark, #213547);
  text-align: center;
}

h1 {
  font-size: 3rem;
}
</style>
