<template>
  <div class="item">
    <a :href="TimeLineDetail.website" target="_blank">
      <div class="name-and-logo">
        <img
          :src="require(`../assets/images/${TimeLineDetail.logoImage}`)"
          class="company-logo"
          alt=""
        />
        <h4 class="company-name">
          {{ TimeLineDetail.CompanyName }}
        </h4>
      </div>
    </a>
    <p class="title">
      {{ TimeLineDetail.Title }}
    </p>
    <div class="job-info">
      <p>
        {{ TimeLineDetail.TileLine }}
      </p>
    </div>

    <ul class="timeline-description">
      <li v-for="desc in TimeLineDetail.Information" :key="desc">
        - {{ desc }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TimeLine",
  props: ["TimeLineDetail"],
};
</script>
<style>
.item {
  position: relative;
  margin-bottom: 16px;
}
.item::before {
  content: "";
  height: 8px;
  width: 8px;
  border: 2px solid var(--color-blue);
  background: var(--color-blue);
  border-radius: 50%;
  position: absolute;
  left: -37px;
  top: 0px;
}

.job-info {
  position: absolute;
  left: -125px;
  top: -5px;
}
.job-info > p {
  margin: 0;
  color: var(--color-blue);
}
.title {
  color: var(--color-parrot);
  margin: 2px 0;
  font-size: 14px;
}
.timeline-description li {
  padding: 6px 0;
  font-size: 16px;
  line-height: 1.5em;
  text-align: justify;
}
</style>