<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/">
          <a href="" class="brand-logo center">Planete foot</a></router-link
        >
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <a href="https://github.com/cedricHOTZ/planete-foot-vuejs"
            ><li><i class="fab fa-github ml-5"></i></li
          ></a>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>

<style lang="scss" scoped>
nav {
  background-color: rgba(255, 255, 255, 0);
}
a {
  text-decoration: none;
  font-weight: bold;
  text-transform: uppercase;
}
i {
  color: blue !important;

  font-size: 35px;
}
</style>
