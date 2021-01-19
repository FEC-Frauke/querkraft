import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
function lazyLoad(view) {
  return () => import(`@/views/${view}.vue`);
}

const routes = [
  {
    path: "/home",
    alias: "",
    name: "Home",
    component: lazyLoad("Home"),
  },
  {
    path: "/querkraft",
    name: "Querkraft",
    component: lazyLoad("Querkraft"),
  },
  {
    path: "/loesungen",
    name: "Lösungen",
    component: lazyLoad("Lösungen"),
  },
  {
    path: "/kontakt",
    name: "Kontakt",
    component: lazyLoad("Kontakt"),
  },
  {
    path: "/myquerkraft",
    name: "MyQuerkraft",
    component: lazyLoad("Userarea/Userarea"),
    children: [
      {
        path: "",
        name: "parent",
        redirect: {
          name: "Ueberblick",
        },
      },
      {
        path: "/myquerkraft/ueberblick",
        name: "Ueberblick",
        component: lazyLoad("Userarea/Überblick/Überblick"),
      },
      {
        path: "/nachrichten",
        name: "Nachrichten",
        component: lazyLoad("Userarea/Nachrichten/Nachrichten"),
      },
      {
        path: "/kurse",
        name: "Kurse",
        component: lazyLoad("Userarea/Kurse/Kurse"),
      },
      {
        path: "/einstellungen",
        name: "Einstellungen",
        component: lazyLoad("Userarea/Einstellungen/Einstellungen"),
      },
    ],
  },
  {
    path: "/registrierung",
    name: "Registrierung",
    component: lazyLoad("Registrierung"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    let y;
    if(window.innerWidth > 768) {
      y = 108
    }

    else {
      y = 0
    }

    return { x: 0, y: y }
  }
});

export default router;
