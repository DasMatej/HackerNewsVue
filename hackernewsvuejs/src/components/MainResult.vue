<template>
  <div class="main__result">
    <div class="main__result__top">
      <div class="category">
        <select @change="selectCategory($event)" class="form-control">
          <option value="topstories">Popular</option>
          <option value="newstories">New</option>
          <option value="beststories">Best Stories</option>
        </select>
      </div>
      <div class="filter">
        <select name="filter" id="filters">
          <option value="Filter">Filter</option>
        </select>
        <img
          src="@/assets/sort-button-with-three-lines.png"
          alt=""
          class="custom-arrow"
        />
      </div>
    </div>

    <MainResultView
      :storyType="listOrder"
      :sidenavChange="sidenavChange"
      :submit="submit"
    />
  </div>
</template>

<script>
import MainResultView from "./MainResultView.vue";
export default {
  name: "MainResult",
  components: {
    MainResultView,
  },
  props: ["sidenavChange", "submit"],
  data() {
    return {
      listOrder: "topstories",
    };
  },

  methods: {
    selectCategory(event) {
      this.listOrder = event.target.value;
      return this.listOrder;
    },
  },
};
</script>

<style scoped>
.main__result {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
}
.main__result__top {
  display: flex;
  justify-content: space-between;
  margin-left: 2.5rem;
  margin-bottom: 0.5em;
}
.category select {
  background-color: rgb(241, 241, 241);
  padding: 6px;
  border: none;
  outline: none;
  border-radius: 5px;
  width: 110px;
}
.filter {
  margin-right: 2.5rem;
  background-color: rgb(241, 241, 241);
  border-right: none;
  border-radius: 5px;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
}
.filter select {
  padding: 6px;
  outline: none;
  border-radius: 5px;
  border: none;
  background-color: rgb(241, 241, 241);
  appearance: none;
  width: 110px;
  display: flex;
}
.custom-arrow {
  width: 15px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  position: absolute;
  top: 7px;
  right: 10px;
  display: block;
  pointer-events: none;
}
</style>
