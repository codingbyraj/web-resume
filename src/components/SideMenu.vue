<template>
  <div id="sidebar">
    <ul>
      <li class="side-menu">
        <a href="">
          <div class="menu-icon">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </div>
          <p>About</p>
        </a>
      </li>
      <li class="side-menu">
        <a href="">
          <div class="menu-icon">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </div>
          <p>Skills</p>
        </a>
      </li>
      <li class="side-menu">
        <a href="">
          <div class="menu-icon">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </div>
          <p>Profile</p>
        </a>
      </li>
      <li class="side-menu">
        <a href="">
          <div class="menu-icon">
            <font-awesome-icon :icon="['fas', 'coffee']" />
          </div>
          <p>Contact</p>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "SideMenu",
};
</script>
<style scoped>
#sidebar {
  background: white;
  border-radius: 5px;
  margin: 0 10px 0 0;
}

ul li.side-menu {
  padding: 24px 10px;
  color: blueviolet;
  text-align: center;
  position: relative;
}

ul li.side-menu:not(:first-child):before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: auto;
  width: 100%;
  height: 1px;
  background: -moz-radial-gradient(
    right,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: -webkit-radial-gradient(
    right,
    ellipse cover,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
  background: radial-gradient(
    ellipse at right,
    #ddd 0%,
    rgba(255, 255, 255, 0) 70%
  );
}
</style>