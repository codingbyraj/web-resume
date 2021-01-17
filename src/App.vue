<template>
  <div class="page_wrap">
    <ResumeBackground />
    <ResumeWrapper />
  </div>
</template>

<script>
import ResumeBackground from "./components/ResumeBackground.vue";
import ResumeWrapper from "./components/ResumeWrapper.vue";
export default {
  name: "App",
  components: {
    ResumeBackground,
    ResumeWrapper,
  },
};
</script>

<style scoped>
</style>
