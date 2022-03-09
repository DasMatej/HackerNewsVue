<template>
  <div class="main__trending">
    <span>Trending</span>
    <div class="trending">
      <div class="camera">
        <img id="camera" src="@/assets/camera.png" />
        <div class="camera__text">
          Oppo Unveils Its Next-Generation<br />Under-ScreenCamera
        </div>
      </div>
      <div class="fireFighter">
        <img id="fireFighter" src="@/assets/fireFIghting.png" />
        <div class="fireFighter__text">
          Using satellites and AI, space-based<br />technology the future of
          fireFIghting
        </div>
      </div>
      <div class="battery">
        <img id="battery" src="@/assets/Battery.png" />
        <div class="battery__text">
          LightBulb moment': the battery<br />technology invented in a Brisbane
          garage
        </div>
      </div>
      <div class="futurePower">
        <img id="futurePower" src="@/assets/FuturePowerTech.png" />
        <div class="futurePower__text">
          Streets of gold: new issue of Future Power<br />Technology out now
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
