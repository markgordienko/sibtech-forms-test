import { createRouter, createWebHashHistory } from "vue-router";
import AuthView from "../views/AuthView.vue";
import FormsListView from "../views/FormsListView.vue";
import FormCreationView from "../views/FormCreationView.vue";
import FormPreviewView from "../views/FormPreviewView.vue";

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
  {
    path: "/preview",
    name: "preview",
    props: (route) => ({
      serializedObject: route.query.serializedObject,
    }),
    component: FormPreviewView,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
