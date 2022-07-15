import { createRouter, createWebHashHistory  } from 'vue-router'
import LayoutMain from '@/layout/LayoutMain.vue'
import PageHome from '@/views/home.vue'
import PageContact from '@/views/contact.vue'
import PageMine from '@/views/mine.vue'

const tabRoutes = [
  {
    path: '/',
    name: 'LayoutMain',
    redirect: '/home',
    component: LayoutMain,
    children: [
      {
        path: 'home',
        name: 'PageHome',
        component: PageHome,
      },
      {
        path: 'contact',
        name: 'PageContact',
        component: PageContact,
      },
      {
        path: 'mine',
        name: 'PageMine',
        component: PageMine,
      },
    ],
  },
]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    ...tabRoutes,
    {
      path: '/chat-room',
      name: 'PageChatRoom',
      component: () => import('@/views/chat-room.vue'),
    },
  ],
})

export default router
