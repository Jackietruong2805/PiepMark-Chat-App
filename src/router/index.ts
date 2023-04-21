import { HOME_ROUTE } from '@/views/home/HomeView.route';
import { createRouter, createWebHistory } from 'vue-router';
import {useMemberStore} from "../stores/storemembers";
import ChatBox from "../components/ChatBox.vue"
import AppChat from "../components/AppChat.vue"



const routes = [
  { 
    path: "/",
    name: "appchat",
    component: AppChat,
    alias: "/chatbox/:id"
  },
  { 
    path: "/chatbox/:id",
    name: "member",
    component: ChatBox,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


