import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'
import Create from '../views/Create.vue'
import RealtimeTest from '../views/RealtimeTest.vue'
import Tag from '../views/Tag.vue'
import RealtimeTestVue from '@/views/RealtimeTest.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/posts/post/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Create,
  },
  {
    path: '/tags/:tag',
    name: 'Tag',
    component: Tag
  },
  {
    path: '/realtime',
    name: 'RealtimeTest',
    component: RealtimeTest
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
