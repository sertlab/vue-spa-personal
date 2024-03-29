import Vue from 'vue'
import VueRouter from 'vue-router'
import AppBiography from './theme/AppBiography.vue'
import Interests from './theme/Interests.vue'
import NotFound from './theme/NotFound.vue'
import Examples from './theme/Examples.vue'
import ExamplesCss from './theme/ExamplesCss.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/interests', component: Interests},
    {path: '/', component: AppBiography},
    {path: '/vue-examples', component: Examples},
    {path: '/vue-examples-css', component: ExamplesCss},
    {path: '*', component: NotFound}
  ]
})

export default router
