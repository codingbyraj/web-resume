<template>
  <div class="typewriter">
    <h3>
      I am a
      <span id="txt-rotate"> </span>
    </h3>
  </div>
</template>
<script>
export default {
  name: "TypewriterEffect",
  data() {
    return {
      el: null,
      loopNum: 0,
      txt: "",
      isDeleting: false,
    };
  },
  props: ["dataPeriod", "dataRotate"],
  methods: {
    runEffect() {
      var i = this.loopNum % this.dataRotate.length;
      var fullTxt = this.dataRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.dataPeriod;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.runEffect();
      }, delta);
    },
  },
  mounted() {
    this.el = this.$el.querySelector("#txt-rotate");
    if (this.dataRotate) {
      this.runEffect();
    }
  },
};
</script>
<style>
.typewriter h3 {
  text-align: center;
  font-size: 16px;
  color: var(--color-parrot);
  letter-spacing: 0.5px;
  font-weight: 500;
}

#txt-rotate > .wrap {
  border-right: 0.08em solid #666;
}
</style>