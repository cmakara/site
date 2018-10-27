import Vuex from "vuex";
import Vue from "vue";

import { Module } from "vuex-dry";

Vue.use(Vuex);

const createStore = () => {
  return new Vuex.Store({
    state: () => ({}),
    modules: {
      navigation: Module.build({
        state: () => ({
          pages: [
            { id: "posts", text: "Posts", link: "posts", icon: "folder" },
            { id: "about", text: "About me", link: "about", icon: "user" }
          ],
          externalLinks: [
            {
              id: "github",
              text: "Github",
              link: "https://github.com/cmakara",
              icon: "github"
            },
            {
              id: "linkedin",
              text: "LinkedIn",
              link: "https://www.linkedin.com/in/csabamakara",
              icon: "linkedin"
            },
            {
              id: "mail",
              text: "E-mail",
              link: "mailto:csaba.makara@gmail.com",
              icon: "mail"
            },
            {
              id: "rss",
              text: "Rss",
              link: "https://cmakara.github.io/feed.xml",
              icon: "rss"
            }
          ]
        })
      })
    }
  });
};

export default createStore;
