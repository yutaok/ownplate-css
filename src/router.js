import Vue from "vue";
import Router from "vue-router";

import Samples from "./components/Samples";
import SampleUserRestaurant from "./components/SampleUserRestaurant";
import SampleButtons from "./components/SampleButtons";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Samples,
    },
    {
      path: "/sample-user-restaurant",
      component: SampleUserRestaurant,
    },
    {
      path: "/sample-buttons",
      component: SampleButtons,
    },
  ],
});
