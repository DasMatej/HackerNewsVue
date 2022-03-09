<template>
  <div class="main__header">
    <div class="search">
      <div id="SearchBarImg">
        <a href="#"><img src="@/assets/SearchBar.png" alt="" /></a>
      </div>
      <input
        type="text"
        id="input__search"
        class="input__search"
        placeholder="Search..."
        @keyup.enter="submit"
      />
    </div>
    <div class="login">
      <div class="bell">
        <img src="@/assets/bell.png" alt="" />
      </div>
      <div class="signUp">
        <button>Sign up</button>
      </div>
      <div class="logIn__button">
        <button><span>Log in</span></button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      submitted: "",
    };
  },
  methods: {
    submit(submit) {
      this.submitted = submit.target.value;
      this.$emit("submitted", submit.target.value);
    },
  },
};
</script>
<style scoped>
.main__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0 20px 40px;
}
.search {
  display: flex;
  width: 50%;
  height: 40px;
  border-radius: 20%;
}
#SearchBarImg {
  background-color: rgb(241, 241, 241);
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
}
.search img {
  width: 20px;
  opacity: 0.5;
}
.input__search {
  width: 100%;
  border: none;
  background-color: rgb(241, 241, 241);
  outline: none;
}
.input__search::placeholder {
  opacity: 0.7;
}
.login {
  margin-right: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20vw;
}
.signUp button,
.logIn__button button {
  width: 100px;
  height: 40px;
  background-color: rgb(241, 241, 241);
  border: none;
  font-weight: 600;
  border-radius: 7%;
}
.logIn__button button {
  background-color: rgb(255, 68, 0);
  color: white;
}
.signUp button:hover {
  background-color: rgb(231, 231, 231);
}
.signUp button:active {
  background-color: rgb(224, 224, 224);
}
.logIn__button button:hover {
  background-color: rgb(233, 63, 1);
}
.logIn__button button:active {
  background-color: rgb(223, 59, 0);
}
.logIn__button button span {
  opacity: 0.9;
}
.bell img {
  width: 30px;
}
.bell {
  padding: 4px;
}
.bell:hover {
  background-color: rgb(240, 240, 240);
}
.bell:active {
  background-color: rgb(233, 233, 233);
}
/* MAIN TRENDING */
.main__trending {
  width: 100%;
  height: 170px;
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.trending {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.main__trending span {
  opacity: 0.8;
  margin-bottom: 0.5em;
}
#camera,
#fireFighter,
#battery,
#futurePower {
  width: 16vw;
  height: 13vh;
  border-radius: 20px;
}
.camera,
.fireFighter,
.battery,
.futurePower {
  margin-right: 2%;
  position: relative;
}
.camera__text,
.fireFighter__text,
.battery__text,
.futurePower__text {
  position: absolute;
  bottom: 8px;
  left: 16px;
  color: white;
  font-weight: 600;
  font-size: 10px;
}
</style>
