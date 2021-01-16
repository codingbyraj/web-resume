<template>
  <div class="wrapper">
    <div class="side-menu">
      <SideMenu />
    </div>
    <div class="card">
      <UserCard />
    </div>
    <div class="details">
      <SectionDetail />
    </div>
  </div>
</template>
<script>
import UserCard from "./UserCard.vue";
import SideMenu from "./SideMenu.vue";
import SectionDetail from "./SectionDetail.vue";
export default {
  name: "ResumeWrapper",
  components: {
    UserCard,
    SideMenu,
    SectionDetail,
  },
};
</script>
<style>
</style>