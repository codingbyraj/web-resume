<template>
  <div id="sidebar">
    <ul>
      <li class="side-menu">
        <router-link to="/">
          <div class="menu-icon">
            <i class="fas fa-user"></i>
          </div>
          <p class="menu-text">About</p>
        </router-link>
      </li>
      <li class="side-menu">
        <router-link to="/profile">
          <div class="menu-icon">
            <i class="fas fa-id-badge"></i>
            <!-- <i class="far fa-id-badge"></i> -->
          </div>
          <p class="menu-text">Profile</p>
        </router-link>
      </li>
      <li class="side-menu">
        <router-link to="/projects">
          <div class="menu-icon">
            <i class="fas fa-adjust"></i>
          </div>
          <p class="menu-text">Projects</p>
        </router-link>
      </li>
      <li class="side-menu">
        <router-link to="/contact">
          <div class="menu-icon">
            <i class="fas fa-paper-plane"></i>
          </div>
          <p class="menu-text">Contact</p>
        </router-link>
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