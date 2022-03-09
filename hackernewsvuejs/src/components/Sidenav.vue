<template>
  <div class="sidenav">
    <SidenavTop />
    <SidenavMiddle @sideChange="sideChange" />
    <!-- @changeSide="$emit('changeSide', change)" -->
    <SidenavBottom />
  </div>
</template>
<script>
import SidenavTop from "./SidenavTop.vue";
import SidenavMiddle from "./SidenavMiddle.vue";
import SidenavBottom from "./SidenavBottom.vue";

export default {
  name: "Sidenav",
  components: {
    SidenavTop,
    SidenavMiddle,
    SidenavBottom,
  },
  methods: {
    sideChange(value) {
      this.$emit("sideChange", value);
      return value;
    },
  },
};
</script>
<style scoped>
.sidenav {
  height: 100vh;
  width: 400px;
  display: flex;
  flex-direction: column;
  background-color: rgb(240, 239, 239);
}
</style>
