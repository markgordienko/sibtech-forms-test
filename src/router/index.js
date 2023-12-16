import { createRouter, createWebHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import FormsListView from "../views/FormsListView.vue";
import FormCreationView from "../views/FormCreationView.vue";

import FormsListComponent from "../components/FormsListComponent.vue";
import FieldsComponent from "../components/FieldsComponent.vue";

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
  {
    path: "/create-form/:id",
    name: "formCreation",
    props: true,
    children: [
      {
        path: "fields",
        name: "fields",
        component: FieldsComponent,
      },
    ],
    component: FormCreationView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
