<template>
  <div class="section-details">
    <h2 class="section-heading">
      <span>About</span>
    </h2>
    <div class="about-detail">
      <!-- about me -->
      <div class="about-me">
        <p>
          I'm Abhishek Raj, Software Developer from Delhi, India, specialised in
          frontend and backend development for complex scalable web apps.
        </p>
        <p>
          Academically speaking, I hold a masters degree in Computer Science.
        </p>
        <h4 class="head2">What I do</h4>
        <p>
          I have more than 6 years' experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies I use. Want to find out more about my experience
          and work? Click
          <a class="download-resume" :href="cvUrl" download="Abhishek_Raj.pdf"
            >here
          </a>
          to download my resume.
        </p>
        <!-- <p>
          If you wanna talk or share a cup of coffee, please shoot me a message
          <router-link class="link" to="/contact">here</router-link>.
        </p> -->
      </div>
      <div class="skillset">
        <div class="skill">
          <i class="fa-5x skill-icon-js fab fa-js-square"></i>
          <div class="skill-text">JavaScript</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-angular fab fa-angular"></i>
          <div class="skill-text">Angular</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-vue fab fa-vuejs"></i>
          <div class="skill-text">Vue JS</div>
        </div>
        <div class="skill">
          <img :src="createjsImgUrl" alt="" />
          <div class="skill-text">Create JS</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-node fab fa-node"></i>
          <div class="skill-text">Node JS</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-npm fab fa-npm"></i>
          <div class="skill-text">NPM</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-html fab fa-html5"></i>
          <div class="skill-text">HTML 5</div>
        </div>
        <div class="skill">
          <i class="fa-5x skill-icon-css fab fa-css3-alt"></i>
          <div class="skill-text">CSS 3</div>
        </div>
        <div class="skill">
          <!-- <i class="fa-5x skill-icon-git fas fa-code-branch"></i> -->
          <img :src="gitImgUrl" alt="">
          <div class="skill-text">Git</div>
        </div>
        <div class="skill">
          <img :src="mongodbImgUrl" alt="" />
          <div class="skill-text">Mongo DB</div>
        </div>
        <div class="skill">
          <img :src="sqldbImgUrl" alt="" />
          <div class="skill-text">SQL</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import ContactView from "../components/ContactView.vue";

export default {
  name: "AboutMe",
  components: {
    // ContactView,
  },
  data() {
    return {
      phoneIcon: '<i class="fas fa-phone-alt"></i>',
      mailIcon: '<i class="fas fa-envelope-open-text"></i>',
      addressIcon: '<i class="fas fa-map-marker-alt"></i>',
      address: "Noida, India",
      mailAddress: "dev@iabhishekraj.in",
      phoneNumber: "+91-8287598404",
      createjsImgUrl: require("@/assets/images/createjs-logopng.png"),
      mongodbImgUrl: require("@/assets/images/mongo.png"),
      sqldbImgUrl: require("@/assets/images/sql.png"),
      cvUrl: require("@/assets/resume/Abhishek_Raj.pdf"),
      gitImgUrl: require("@/assets/images/git.png")
    };
  },
};
</script>
<style scoped>
.section-details {
}
.about-detail {
  /* display: grid;
  grid-template-columns: 8fr 4fr;
  grid-template-rows: 1fr; */
}

.my-details {
  /* padding: 25px 10px; */
}

.link {
  cursor: pointer;
  color: var(--color-blue);
}
.about-me{
  margin-bottom: 45px;
}
.about-me p {
  text-align: justify;
  font-size: 17px;
}
.download-resume {
  color: var(--color-blue);
}

.skill-icon-angular {
  color: #ca3327;
}
.skill-icon-vue {
  color: #42b883;
}
.skill-icon-node {
  color: #3c873a;
}
.skill-icon-js {
  color: #f0db4f;
}
.skill-icon-npm {
  color: #cc3534;
}
.skill-icon-html {
  color: #e44d26;
}
.skill-icon-css {
  /* color: #50B6F2; */
  color: #02699c;
}
.skill-icon-git {
  color: #f14e32;
}
.skill img {
  width: 5em;
  height: 4.5em;
}
</style>
