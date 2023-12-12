<template>
  <div class="section-details">
    <h2 class="section-heading">
      <span>Profile</span>
    </h2>
    <!-- Experience -->
    <div class="experience">
      <p class="section__para">Experience <i class="timeline-icon fas fa-briefcase"></i></p>
      <div class="timeline__wrapper">
        <div v-for="data in experienceData" :key="data.id">
          <TimeLine :TimeLineDetail="data" />
        </div>
      </div>
    </div>

    <!-- Education -->
    <div class="education">
      <p class="section__para">
        Education <i class="timeline-icon fas fa-user-graduate"></i>
        <!-- <i class="timeline-icon fas fa-graduation-cap"></i> -->
      </p>
      <div class="timeline__wrapper">
        <div v-for="data in educationData" :key="data.id">
          <TimeLine :TimeLineDetail="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TimeLine from "../components/TimeLine.vue";

export default {
  name: "Profile",
  components: {
    TimeLine,
  },
  data() {
    return {
      experienceData: [
        {
          id: 0,
          CompanyName: "Taazaa Tech Pvt. Ltd.",
          logoImage: "taazaa-logo.png",
          website:"http://www.taazaa.com/",
          Title: "Senior Software Engineer",
          TileLine: "Present",
          Information: [
            "Tenure : April 2020 - Present",
            "I am working in e-Learning application. The application helps student as well as teachers to learn and teach mathematics in a new and interesting way.",
            "My role is to design and develop the manipulatives in the application.",
          ],
        },
        {
          id: 1,
          CompanyName: "Nagarro",
          logoImage: "nagarro-logo.png",
          website:"https://www.nagarro.com/",
          Title: "Associate, Technology",
          TileLine: "2020",
          Information: [
            "Tenure : January 2018 - March 2020",
            "The project was a kind of order management system that was responsible to calculate the price of selected items by the user.",
            "My role was to design and develop the new features in the application.",
          ],
        },
      ],
      educationData: [
        {
          id: 0,
          CompanyName: "G. G. S. Indraprastha University",
          website:"http://www.ipu.ac.in/",
          logoImage: "ipu-logo.png",
          Title: "Post Graduation",
          TileLine: "2018",
          Information: ["Tenure : 2015 - 2018"],
        },
        {
          id: 1,
          CompanyName: "Punjab Technical University",
          website:"https://ptu.ac.in/",
          logoImage: "ptu-logo.png",
          Title: "Graduation",
          TileLine: "2014",
          Information: ["Tenure : 2011 - 2014"],
        },
      ],
    };
  },
};
</script>
<style scoped>
ul {
  position: relative;
}
li.timeline {
  position: relative;
}

li.timeline:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 2px;
  background: var(--color-blue);
  top: -16px;
  left: 27%;
}
li .col-time {
  width: 23%;
  display: inline-block;
}

li .col-time h4 {
  position: absolute;
  top: 0;
  left: 5%;
}
li .point-label {
  margin-left: 8%;
  display: inline-block;
}
.suitcase {
  content: "";
  position: absolute;
  left: 27%;
  top: 19px;
  margin-left: -5px;
  background: var(--color-blue);
  border: 2px solid var(--color-blue);
  border-radius: 50%;
  height: 8px;
  width: 8px;
}

ul li.timeline:first-child .suitcase {
  top: -54px;
  padding: 15px;
  left: 26%;
  margin-left: -11px;
}

</style>
