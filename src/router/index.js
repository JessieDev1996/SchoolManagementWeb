import { createRouter, createWebHistory } from 'vue-router'
import StudentManagement from '@/views/StudentManagement.vue'


// import Layout Frontend
import Layout from '@/layouts/layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{
      path: '',
      name: 'StudentManagement',
      component: StudentManagement
    }],
    meta: {
      title: 'หน้าหลัก'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router