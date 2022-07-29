import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import MoreView from '../views/MoreView.vue'

const routes = [
  {
    name: 'EventList',
    component: EventListView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/more',
    name: 'MoreStuff',
    component: MoreView
  }
]
