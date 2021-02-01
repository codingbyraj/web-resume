<template>
  <div class="item">
    <h4 class="company-name">
      {{ TimeLineDetail.CompanyName }}
    </h4>
    <p class="title">
      {{ TimeLineDetail.Title }}
    </p>
    <div class="job-info">
      <div>
        {{ TimeLineDetail.TileLine }}
      </div>
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
  top: 0;
}

.company-name {
  font-weight: 600;
  margin-bottom: 0px;
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
}
</style>