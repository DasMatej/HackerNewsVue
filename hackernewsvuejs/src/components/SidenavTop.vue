<template>
  <div class="top">
    <span id="Hacker__News"
      ><img src="@/assets/HackerNews.png" alt="" />Hacker News</span
    >
    <span>The news & latest top stories</span>
  </div>
</template>

<script>
export default {
  name: "SidenavTop",
};
</script>

<style scoped>
.top {
  display: flex;
  flex-direction: column;
  margin: 50px;
}
#Hacker__News {
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: larger;
  margin-bottom: 10px;
}
#Hacker__News img {
  width: 45px;
  margin-right: 15px;
}
</style>
