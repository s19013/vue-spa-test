import { createRouter, createWebHistory } from 'vue-router'
import testComponents from '@/components/testComponents.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/second',
    name: 'second',
    component: testComponents
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router