<template>
  <div>
    <!-- Menú Superior -->
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :default-active="activeMenu"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/" @click="navigate('/')">Home</el-menu-item>
      <el-menu-item index="/customers" @click="navigate('/customers')"
        >Customers</el-menu-item
      >
    </el-menu>

    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const activeMenu = ref(route.path);

const navigate = (path: string) => {
  router.push(path);
  activeMenu.value = path;
};
</script>

<style scoped>
.el-menu-demo {
  border: none;
}
</style>
