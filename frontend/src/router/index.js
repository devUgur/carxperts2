import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index';

// Layouts
import MainLayout from "@/layouts/Main.layout.vue";

// Views
import HomeView from '@/views/Home.view.vue';
import ServicesView from '@/views/Services.view.vue';
import AboutView from '@/views/About.view.vue';
import ContactView from '@/views/Contact.view.vue';


// Components
import OneServiceComponent from "@/components/services/OneService.component.vue";
//import CertificatesComponent from "@/components/about/Certificates.component.vue";
//import TheTeamComponent from "@/components/about/TheTeam.component.vue";

const routes = [
  {
    path: '/',
    name: 'MainLayout',
    component: MainLayout,
    children: [
      { path: '', component: HomeView, name: "HomeView" },
      { path: 'services', component: ServicesView, name: "ServicesView" },
      { path: 'services/:service', component: OneServiceComponent },
      { path: 'about', component: AboutView, name: "AboutView" },
      { path: 'about/team', component: {}, name: "TheTeamComponent" },
      { path: 'about/zertifikate', component: {}, name: "CertificatesComponent" },
      { path: 'contact' , component: ContactView },
    ]
  },
  {
    path: '/about',
    name: 'about',
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.afterEach((to, from, next) => {
  store.dispatch('nav/scrollToTopnav');
})

export default router
