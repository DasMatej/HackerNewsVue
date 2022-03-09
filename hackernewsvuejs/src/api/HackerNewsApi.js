import axios from "axios";

export var HackerNewsApi = function () {
  var me = {};
  var BASE_URL = "https://hacker-news.firebaseio.com/v0/";
  var hundredStories = `?print=pretty&limitToFirst=100&orderBy="$key"`;
  var twoHundredStories = `?print=pretty&limitToFirst=200&orderBy="$key"`;
  var storyUrl = `${BASE_URL}item/`;

  me.getStories = async function (storyType, page, sidenavChange, search) {
    // get 500 by storyType
    // storyType = topstories,newstories,beststories
    // sidenavChange = News, Past
    // return the stories;
    if (search != undefined) {
      sidenavChange = "";
      return axios(`${BASE_URL}${storyType}.json${twoHundredStories}`).then(
        (x) => {
          var result = [];

          for (var pastStory of x.data) {
            var pastAxios = axios(`${storyUrl}${pastStory}.json`).then((xx) => {
              return xx.data;
            });
            result.push(pastAxios);
          }
          return result;
        }
      );
    }
    if (sidenavChange == "News") {
      return axios(`${BASE_URL}${storyType}.json`).then((x) => {
        var y = x.data.slice((page - 1) * 6, page * 6);
        var result = [];
        for (var stories of y) {
          var res = axios(`${storyUrl}${stories}.json`).then((xx) => {
            return xx.data;
          });
          result.push(res);
        }
        return result;
      });
    }
    if (sidenavChange == "Past") {
      return axios(`${BASE_URL}${storyType}.json${hundredStories}`).then(
        (x) => {
          var result = [];
          for (var pastStory of x.data) {
            var pastAxios = axios(`${storyUrl}${pastStory}.json`).then((xx) => {
              return xx.data;
            });
            result.push(pastAxios);
          }
          return result;
        }
      );
    }
  };

  return me;
};
