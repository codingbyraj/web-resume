<template>
  <div class="project">
    <h4 class="project__name">{{ data.name }}</h4>
    <p class="project__domain">Domain: {{ data.domain }}</p>
    <div class="project__desc">
      <p v-for="desc in data.description" :key="desc">
        {{ desc }}
      </p>
    </div>
    <p class="project__tech">
      Technologies:
      <span v-for="tech in data.technologies" :key="tech"> {{ tech }}, </span>
    </p>
    <div v-if="data.image">
      <progressive-img :src="imageUrl" :placeholder="placeholderUrl"/>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProjectDescription",
  props: ["data"],
  computed: {
    // imageUrl: function () {
    //   return require("@/assets/project-images/" + this.data.image.img);
    // },
    // placeholderUrl:function(){
    //     return require("@/assets/project-images/" + this.data.image.placeholder);
    // }
  },
};
</script>
<style scoped>
</style>