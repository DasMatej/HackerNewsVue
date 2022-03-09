<template>
  <div class="main">
    <MainHeader @submitted="submitted" />
    <MainTrending />
    <MainResult :sidenavChange="sidenavChange" :submit="submit" />
  </div>
</template>

<script>
import MainHeader from "./MainHeader.vue";
import MainTrending from "./MainTrending.vue";
import MainResult from "./MainResult.vue";

export default {
  name: "Main",
  components: {
    MainHeader,
    MainTrending,
    MainResult,
  },
  data() {
    return {
      submit: "",
    };
  },
  props: ["sidenavChange"],
  methods: {
    submitted(value) {
      this.submit = value;
    },
  },
};
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}
</style>
