import { createRouter, createWebHistory } from 'vue-router'
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
    component: () => import('@/components/testComponents.vue')
  },
  {
    path: '/book',
    name: 'booklist',
    component: () => import('@/components/bookList.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    component: () => import('@/components/bookDetail.vue'),
    props: route => ({
      id     : Number(route.params.id),
      title  : route.params.title,
      content: route.params.content,
    })
  },
  {
    path: '/book/:id',
    name: 'book',
    component: () => import('@/components/bookDetail.vue'),
    props: route => ({
      id     : Number(route.params.id),
      title  : route.params.title,
      content: route.params.content,
    })
  },
  {
    path: '/:catchAll(.*)',//上記に書いてあるパス以外すべてが対象(正規表現?)
    redirect:'/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router