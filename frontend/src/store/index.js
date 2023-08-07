import { createStore } from 'vuex'

// Store Modules
import StyleStore from "@/store/modules/style.store";
import TopnavStore from "@/store/modules/topnav.store";
import WhatsappStore from "@/store/modules/whatsapp.store";
import NavStore from "@/store/modules/nav.store";
import MenuStore from "@/store/modules/menu.store";
import GoogleStore from "@/store/modules/google.store";
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    style: StyleStore,
    topnav: TopnavStore,
    whatsapp: WhatsappStore,
    nav: NavStore,
    menu: MenuStore,
    google: GoogleStore,
  }
})
