<template>
  <div class="contact-view-wrapper">
    <div class="icon" v-html="icon"></div>
    <!-- {{heading}} -->
    <div>
      {{ data }}
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactView",
  props: ["icon", "heading", "data"],
};
</script>
<style scoped>
.icon {
  text-align: center;
}
</style>