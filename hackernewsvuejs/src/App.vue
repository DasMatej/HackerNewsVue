<template>
  <div class="container-fluid">
    <Sidenav @sideChange="sideChange" />
    <Main :sidenavChange="sidenavChange" />
  </div>
</template>

<script>
import Sidenav from "./components/Sidenav.vue";
import Main from "./components/Main.vue";

export default {
  name: "App",
  components: {
    Sidenav,
    Main,
  },
  data() {
    return {
      sidenavChange: "News",
    };
  },
  methods: {
    sideChange(value) {
      this.sidenavChange = value;
    },
  },
};
</script>

<style>
* {
  font-family: "Lato", sans-serif;
  margin: 0;
  padding: 0;
}
.container-fluid {
  display: flex;
  overflow-y: hidden;
  overflow-x: hidden;
}
</style>
