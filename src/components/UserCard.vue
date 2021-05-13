<template>
  <div class="user-card">
    <!-- <div class="user-img"></div> -->
    <progressive-background
      class="user-img"
      :src="cardImage"
      :placeholder="cardImagePlaceholder"
      no-ratio
    />

    <div class="bottom-section">
      <div class="title">
        <p>Hi 👋, This is Abhishek Raj</p>
      </div>

      <!-- typewriter effect -->
      <div class="typewriter">
        <TypewriterEffect
          :data-period="this.dataPeriod"
          :data-rotate="this.dataRotate"
        >
        </TypewriterEffect>
      </div>

      <!-- social site profile links -->
      <div class="social-profile">
        <ul>
          <li>
            <a href="https://github.com/codingbyraj" target="_blank">
              <i class="fab fa-github github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/raj-abhishek-raj"
              target="_blank"
            >
              <i class="fab fa-linkedin linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/ABHISHEKRAJ58" target="_blank">
              <i class="fab fa-twitter-square twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/rai.abhishekraj" target="_blank">
              <i class="fab fa-facebook facebook"></i>
            </a>
          </li>
        </ul>
      </div>

      <!-- download cv / contact me option -->
      <div class="extended-option" id="extended-info">
        <div class="extended-detail cv">
          <a :href="cvUrl" download="Abhishek_Raj.pdf">
            <p>
              <span>
                Download CV <i class="fas fa-cloud-download-alt"></i>
              </span>
            </p>
          </a>
        </div>
        <div class="extended-detail contact-me" @click="goToContact" v-scroll-to="'#extended-info'">
          <p>
            <span> Contact Me <i class="fas fa-paper-plane"></i> </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TypewriterEffect from "./TypewriterEffect.vue";
export default {
  name: "UserCard",
  components: {
    TypewriterEffect,
  },
  data() {
    return {
      dataPeriod: 1000,
      dataRotate: ["Web Developer.", "Software Engineer."],
      cvUrl: require("../assets/resume/Abhishek_Raj.pdf"),
      cardImage: require("../assets/images/pic.png"),
      cardImagePlaceholder: require("../assets/images/pic-placeholder.png"),
    };
  },
  methods: {
    goToContact() {
      if (this.$route.path != "/contact") this.$router.push("contact");
    },
  },
};
</script>
<style scoped>
.user-img::before {
  content: "";
  position: absolute;
  left: -25%;
  bottom: -63%;
  width: 100%;
  height: 70%;
  z-index: 1;
  background: #fafafa;
  transform: rotate(12deg);
  -webkit-transform: rotate(12deg);
  -moz-transform: rotate(12deg);
  -o-transform: rotate(12deg);
}

.user-img::after {
  content: "";
  position: absolute;
  left: auto;
  right: -25%;
  bottom: -63%;
  z-index: 2;
  width: 100%;
  height: 70%;
  background: #fafafa;
  transform: rotate(-8deg);
  -webkit-transform: rotate(-8deg);
  -moz-transform: rotate(-8deg);
  -o-transform: rotate(-8deg);
}

/* bottom-section styling */
.bottom-section {
  padding-bottom: 5px;
}

.social-profile {
  position: relative;
}
.social-profile:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  width: 100%;
  height: 1px;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: radial-gradient(
    ellipse at center,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
}

.social-profile ul {
  padding: 15px 10px;
  color: blueviolet;
  text-align: center;
  display: grid;
  grid-template-columns: repeat(4, 3fr);
}

.social-profile ul li {
  font-size: 20px;
}

.icon {
  font-size: 24px;
}
.github {
  color: #24292e;
}
.linkedin {
  color: #0072b1;
}
.twitter {
  color: #00acee;
}
.facebook {
  color: #4267b2;
}

/* extended-option styling */
.extended-option {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  position: relative;
  gap: 10px;
  grid-template-rows: 1fr;
}
.extended-option p {
  text-align: center;
  color: var(--color-blue);
}

.extended-detail {
  text-align: center;
}
.extended-detail > p {
  cursor: pointer;
  display: inline-block;
}
.extended-detail:hover {
  transition: 0.3s;
}

.extended-detail:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  width: 100%;
  height: 1px;
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: radial-gradient(
    ellipse at center,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
}
</style>