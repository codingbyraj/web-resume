<template>
  <div class="wrapper">
    <div class="menu">
      <SideMenu />
    </div>
    <div class="card">
      <UserCard />
    </div>
    <div class="details">
      <router-view />
    </div>
  </div>
</template>
<script>
import UserCard from "./UserCard.vue";
import SideMenu from "./SideMenu.vue";

export default {
  name: "ResumeWrapper",
  components: {
    UserCard,
    SideMenu,
  },
};
</script>
<style>
</style>