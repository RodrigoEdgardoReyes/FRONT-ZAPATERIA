// @ts-nocheck
import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
//import Lista from '../components/LibroForm.vue'
//import dashboard from '../components/master/dashboard.vue'

const routes = [
  // { path: '/', name: 'Home', component: Home },.
  /*{
    name: 'Dashboard',
    path: '/',
    component: dashboard,
    children: [

      {
        name: 'home',
        path: '/home',
        component: home
      },
      {
        name: 'profile',
        path: '/profile',
        component: profile
      },
      {
        path: 'libros',
        name: 'Libros',
        component: Libros
      },
      {
        path: 'prestamos',
        name: 'Prestamos',
        component: Prestamos
      },
      {
        path: 'lista',
        name: 'Lista',
        component: LibroList
      },
      {
        path: 'ListPrestamos',
        name: 'ListPrestamos',
        component: ListPrestamos
      },
    ]
  }*/
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
