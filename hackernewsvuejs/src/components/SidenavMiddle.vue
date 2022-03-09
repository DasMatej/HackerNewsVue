<template>
  <div class="middle">
    <div
      class="news"
      id="news"
      :style="{ backgroundColor: isActiveOne ? 'white' : 'rgb(238, 238, 238)' }"
      @click="
        onSideChange('News');
        changeColor();
      "
      tabindex="1"
    >
      <img src="@/assets/news.png" alt="" />
      <span>News</span>
    </div>
    <div
      class="past"
      :style="{ backgroundColor: isActiveTwo ? 'white' : 'rgb(238, 238, 238)' }"
      id="past"
      @click="
        onSideChange('Past');
        changeColor();
      "
      tabindex="1"
    >
      <img src="@/assets/document.png" alt="" />
      <span>Past</span>
    </div>
    <div class="comments" id="sideNavStyle">
      <img src="@/assets/conversation.png" alt="" />
      <span>Comments</span>
    </div>
    <div class="show" id="sideNavStyle">
      <img src="@/assets/witness.png" alt="" />
      <span>Show</span>
    </div>
    <div class="jobs" id="sideNavStyle">
      <img src="@/assets/search.png" alt="" />
      <span>Jobs</span>
    </div>
    <div class="ask" id="sideNavStyle">
      <img src="@/assets/question.png" alt="" />
      <span>Ask</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "SidenavMiddle",
  data() {
    return {
      isActiveOne: true,
      isActiveTwo: false,
    };
  },
  methods: {
    onSideChange(change) {
      this.$emit("sideChange", change);
    },
    changeColor() {
      this.isActiveOne = !this.isActiveOne;
      this.isActiveTwo = !this.isActiveTwo;
    },
  },
};
</script>

<style scoped>
.middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: auto;
}
.middle div {
  display: flex;
  width: 200px;
  height: 3vh;
  margin: 10px 10px 10px -20px;
  padding: 1.5rem;
  align-items: center;
  font-weight: 900;
  font-size: larger;
}
.middle div a {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
.middle div a {
  color: black;
}
.middle div a span {
  font-size: 2.5vh;
}

.middle div:nth-child(n + 3):nth-child(-n + 6) {
  opacity: 0.6;
}
.middle div:hover {
  background-color: white;
}
.middle img {
  width: 4vh;
  margin-right: 30px;
}
</style>
