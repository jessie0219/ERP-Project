<template>
  <!-- <div class="d-flex"> -->
  <!-- <div>
      <NavbarSidebar />
    </div> -->
  <div class="inner">
    <CheckDiaryPage />
  </div>
  <!-- </div> -->
</template>

<script>
// import NavbarSidebar from "../../components/student/NavbarSidebar.vue";
import CheckDiaryPage from "../../components/student/CheckDiaryPage.vue";
export default {
  name: "HomeView",
  components: {
    CheckDiaryPage,
    // NavbarSidebar,
  },
};
</script>

<style scoped></style>
