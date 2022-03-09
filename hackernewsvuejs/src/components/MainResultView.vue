<template>
  <div class="result">
    <div class="result__for" v-for="story in stories" :key="story.id">
      <div class="mainResult__result">
        <div class="leftSideResult__result">
          <img class="ResultImg" />
        </div>
        <!-- DataResult -->
        <div class="middleSideResult__result">
          <div class="dataResult">
            <div class="topResult__result">
              <div class="title__result">{{ story.title }}</div>
            </div>
            <div class="botResult__result">
              <div class="by__result">
                <img src="@/assets/user.png" class="UserImage" />{{ story.by }}
              </div>
              <div class="score__result">
                <img src="@/assets/like.png" class="Like" />{{ story.score }}
              </div>
              <div class="time__result">
                <img src="@/assets/time.png" class="Clock" />{{
                  convertTime(story.time)
                }}
                ago
              </div>
              <div class="kids__result">
                <img src="@/assets/speech-bubble.png" class="SpeechBubble" />
                {{ kidsNumber(story.kids) }} commnets
              </div>
              <a class="url__result" :href="story.url">
                <img src="@/assets/globe.png" class="Globe" />{{
                  cutUrl(story.url)
                }}</a
              >
            </div>
          </div>
        </div>
        <div class="rightSideResult__result">
          <img src="@/assets/share.png" class="Share" />
          <img src="@/assets/bookmark.png" class="Bookmark" />
        </div>
      </div>
    </div>
    <div class="main__result__bottom">
      <div class="next__slide">
        <img
          src="@/assets/left-chevron.png"
          @click="this.page > 1 ? pagesNumbersMinus() : this.page"
          id="left__arrow"
        />
        <span class="numbers__left">
          <span id="start__numbers">{{ this.page }}</span>
          <span id="of__numbers__left"> /</span>
          <span id="of__numbers__left"> 83</span>
        </span>
        <img
          src="@/assets/chevron.png"
          @click="this.page < 83 ? pagesNumbersPlus() : this.page"
          id="right__arrow"
        />
      </div>
      <div class="of__results">
        <span id="of__results__span">
          <span id="of"> {{ this.pagesShow }} </span>
          <span id="theOf"> of </span>
          <span id="results__left"> 498 </span>
          <span>resulsts</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { HackerNewsApi } from "../api/HackerNewsApi";
import { mapTime } from "../mapTime/mapTime";

export default {
  name: "MainResultView",
  props: ["storyType", "sidenavChange", "submit"],
  watch: {
    storyType: async function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.stories = [];
      this.theStories = await HackerNewsApi().getStories(
        newVal,
        this.page,
        this.sidenavChange
      );
      for (var obj of this.theStories) {
        obj.then((result) => {
          this.stories.push(result);
        });
      }
    },
    sidenavChange: async function (newVal, oldVal) {
      console.log("Prop changed: ", newVal, " | was: ", oldVal);
      this.stories = [];
      this.theStories = await HackerNewsApi().getStories(
        this.storyType,
        this.page,
        newVal
      );

      for (var obj of this.theStories) {
        obj.then((result) => {
          this.stories.push(result);
          this.stories.sort(function (a, b) {
            return a.time - b.time;
          });
          this.stories = this.stories.slice((this.page - 1) * 6, this.page * 6);
        });
      }
    },
    submit: async function (newVal) {
      this.stories = [];
      this.theStories = await HackerNewsApi().getStories(
        this.storyType,
        this.page,
        this.sidenavChange,
        newVal
      );

      for (var obj of this.theStories) {
        obj.then((result) => {
          if (result.title.includes(newVal)) {
            this.stories.push(result);
            this.stories = this.stories.slice(
              (this.page - 1) * 6,
              this.page * 6
            );
          }
        });
      }
    },
  },
  data() {
    return {
      id: "",
      by: "",
      kids: "",
      score: "",
      time: "",
      title: "",
      url: "",
      theStories: [],
      stories: [],
      page: 1,
      pagesShow: 6,
      scoreData: [],
      scoreList: [],
      thePast: [],
    };
  },
  async mounted() {
    this.theStories = await HackerNewsApi().getStories(
      this.storyType,
      this.page,
      this.sidenavChange
    );
    for (var obj of this.theStories) {
      obj.then((result) => {
        this.stories.push(result);
      });
    }
  },

  methods: {
    kidsNumber(comm) {
      if (comm) return comm.length;
      else return (comm = 0);
    },
    cutUrl(url) {
      if (url)
        return url
          .slice(8, url.length - 1)
          .split("/")
          .slice(0, 1)
          .join();
    },
    convertTime(time) {
      return mapTime(time);
    },
    async pagesNumbersPlus() {
      this.stories = [];
      this.page++;
      this.pagesShow += 6;
      this.theStories = await HackerNewsApi().getStories(
        this.storyType,
        this.page,
        this.sidenavChange
      );
      for (var obj of this.theStories) {
        obj.then((test) => {
          this.stories.push(test);
        });
      }
    },
    async pagesNumbersMinus() {
      this.stories = [];
      this.page--;
      this.pagesShow -= 6;
      this.theStories = await HackerNewsApi().getStories(
        this.storyType,
        this.page,
        this.sidenavChange
      );
      for (var obj of this.theStories) {
        obj.then((test) => {
          this.stories.push(test);
        });
      }
    },
  },
};
</script>

<style scoped>
.result {
  display: flex;
  flex-direction: column;
  height: 33.5em;
  flex: 1;
}

.mainResult__result {
  display: flex;
  flex-direction: row;
  border-top: 1px solid rgb(0, 0, 0, 0.3);
}
.mainResult__result:nth-last-child(1) {
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}
.middleSideResult__result {
  display: flex;
  flex: 0 0 80%;
}
.dataResult {
  display: flex;
  flex-direction: column;
  padding: 15px 0 15px 0;
  overflow: hidden;
}
.topResult__result {
  display: flex;
  font-weight: 900;
  font-size: 20px;
  margin-bottom: 10px;
}
.botResult__result {
  display: flex;
  flex-direction: row;
}
.title__result {
  display: flex;
  font-size: 1vw;
}
.UserImage,
.Like,
.Clock,
.SpeechBubble {
  width: 20px;
  opacity: 0.6;
  margin-right: 7px;
}
.Globe {
  width: 20px;
  margin-right: 7px;
}

.UserImage:hover,
.Like:hover,
.Clock:hover,
.SpeechBubble:hover,
.Globe:hover {
  opacity: 0.7;
}

.by__result,
.score__result,
.time__result,
.kids__result,
.url__result {
  display: flex;
  align-items: center;
}
.by__result {
  width: 9rem;
}
.score__result {
  width: 5rem;
}
.time__result {
  width: 10rem;
}
.kids__result {
  width: 9rem;
}
.url__result {
  width: 11rem;
}
.leftSideResult__result {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 2.5rem;
}
.ResultImg {
  width: 50px;
  height: 50px;
}

.rightSideResult__result {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 0px solid rgb(0, 0, 0, 0.3);
}

.Share,
.Bookmark {
  width: 1.5rem;
  height: 1.5rem;
  margin: 20px;
  opacity: 0.5;
}
.Share:hover,
.Bookmark:hover {
  opacity: 0.6;
}
.main__result__bottom {
  display: flex;
  width: 95%;
  height: 6em;
  justify-content: space-between;
  align-items: center;
  margin-left: 2.3rem;
}
.main__result__bottom img {
  width: 20px;
}
.main__result__bottom img:nth-child(1) {
  opacity: 0.6;
}
.next__slide {
  display: flex;
  align-items: center;
}
#of__numbers__left {
  opacity: 0.5;
}
#of__results__span {
  opacity: 0.5;
  font-weight: 700;
}
#results__left,
#of {
  opacity: 0.9;
}
#theOf {
  font-weight: 500;
}

.leftSideResult__result {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 1rem 1rem 2.5rem;
}
.ResultImg {
  width: 50px;
  height: 50px;
}

.rightSideResult__result {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  border-top: 0px solid rgb(0, 0, 0, 0.3);
}

.Share,
.Bookmark {
  width: 1.5rem;
  height: 1.5rem;
  margin: 20px;
  opacity: 0.5;
}
.Share:hover,
.Bookmark:hover {
  opacity: 0.6;
}
</style>
