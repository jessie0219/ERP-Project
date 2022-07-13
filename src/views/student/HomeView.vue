<template>
  <NavbarSidebar />
  <HomePage />
</template>

<script>
import NavbarSidebar from "../../components/student/NavbarSidebar.vue";
import HomePage from "../../components/student/HomePage.vue";
export default {
  name: "HomeView",
  components: {
    HomePage,
    NavbarSidebar,
  },
};
</script>

<style scoped></style>
