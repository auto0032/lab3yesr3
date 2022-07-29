import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import MoreView from '../views/MoreView.vue'
import StudentView from '../views/StudentView.vue'

const routes = [
  {
    path: '/more',
    name: 'MoreStuff',
    component: MoreView
  },
  {
    path: '/student',
    name: 'student',
    component: StudentView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
