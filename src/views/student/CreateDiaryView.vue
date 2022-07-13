<template>
  <!-- <div class="d-flex"> -->
  <!-- <div>
      <NavbarSidebar />
    </div> -->
  <div class="inner">
    <CreateDiaryPage />
  </div>
  <!-- </div> -->
</template>

<script>
// import NavbarSidebar from "../../components/student/NavbarSidebar.vue";
import CreateDiaryPage from "../../components/student/CreateDiaryPage.vue";
export default {
  name: "HomeView",
  components: {
    CreateDiaryPage,
    // NavbarSidebar,
  },
};
</script>

<style scoped></style>
