<template>
  <div class="bottom">
    <div class="button__submit">
      <button type="button">Submit</button>
    </div>
    <div class="below__submit">
      <span>Application are open for YC</span>
      <span>Winter 2020</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidenav",
};
</script>

<style scoped>
.bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100vh;
  margin: 0 0 25px 50px;
}
.button__submit button {
  width: 9.5rem;
  height: 2.5rem;
  border: 3px solid rgb(230, 150, 2);
  border-radius: 5px;
  font-size: large;
}
.button__submit button:hover {
  background-color: rgb(230, 150, 2);
  animation: fadeIn 1s;
  animation-iteration-count: infinite;
}
@keyframes fadeIn {
  80% {
    opacity: 0.7;
  }
  100% {
    opacity: 1;
  }
}
.below__submit {
  display: flex;
  flex-direction: column;
  margin-top: 2vh;
  opacity: 0.5;
}
</style>
