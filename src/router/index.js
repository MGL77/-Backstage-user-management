import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import one from "@/pages/one.vue"
import two from "@/pages/two.vue"
import three from "@/pages/three.vue"
import four from "@/pages/four.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/three"
    },
    {
      path: "/one",
      component: one
    },
    {
      path: "/two",
      component: two
    },
    {
      path: "/three",
      component: three
    },
    {
      path: "/four",
      component: four
    }
  ]
})
