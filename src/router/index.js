import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import FormsListView from "../views/FormsListView.vue";

import FormsListComponent from "../components/FormsListComponent.vue";

const routes = [
  {
    path: "/",
    name: "auth",
    component: AuthView,
  },
  {
    path: "/forms-list",
    name: "formsList",
    children: [
      {
        path: "forms",
        component: FormsListComponent,
      },
    ],
    component: FormsListView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
