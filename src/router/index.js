import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/mainPage"),
  },
  {
    path: "/CO-00-1-opening",
    name: "CO-00-1-opening",
    component: () => import("@/components/00_opening/CO_00_1_opening"),
  },
  {
    path: "/CO-01-1",
    name: "CO-01-1",
    component: () => import("@/components/01_kirkwall_harbor/CO_01_1_kirkwall"),
  },
  {
    path: "/CO-01-2",
    name: "CO-01-2",
    component: () => import("@/components/01_kirkwall_harbor/CO_01_2_kirkwall"),
  },
  {
    path: "/CO-02-1",
    name: "CO-02-1",
    component: () => import("@/components/02_chantry/CO_02_1_chantry"),
  },
  {
    path: "/CO-02-2",
    name: "/CO-02-2",
    component: () => import("@/components/02_chantry/CO_02_2_chantry"),
  },
  {
    path: "/TT-03-1-MM-03-2",
    name: "/TT-03-1-MM-03-2",
    component: () =>
      import("@/components/03_hanged_man/TT_03_1_MM_03_2_hangedman"),
  },
  {
    path: "/TT-03-3-MM-03-4",
    name: "/TT-03-3-MM-03-4",
    component: () =>
      import("@/components/03_hanged_man/TT_03_3_MM_03_4_hangedman"),
  },
  {
    path: "/TT-03-5-MM-03-6",
    name: "/TT-03-5-MM-03-6",
    component: () =>
      import("@/components/03_hanged_man/TT_03_5_MM_03_6_hangedman"),
  },
  {
    path: "/CC-04-1",
    name: "/CC-04-1",
    component: () => import("@/components/04_anders_clinic/CC_04_1_anders"),
  },
  {
    path: "/CS-04-2",
    name: "/CS-04-2",
    component: () => import("@/components/04_anders_clinic/CS_04_2_anders"),
  },
  {
    path: "/CF-04-3",
    name: "/CF-04-3",
    component: () => import("@/components/04_anders_clinic/CF_04_3_anders"),
  },
  {
    path: "/AA-04-FF-04-5",
    name: "/AA-04-FF-04-5",
    component: () =>
      import("@/components/04_anders_clinic/AA_04_FF_04_5_anders"),
  },
  {
    path: "/CC-05-1",
    name: "/CC-05-1",
    component: () => import("@/components/05_fenris/CC_05_1_fenris"),
  },
  {
    path: "/FF-05-2-AA-05-03",
    name: "FF-05-2-AA-05-03",
    component: () => import("@/components/05_fenris/FF_05_2_AA_05_03_fenris"),
  },
  {
    path: "/CC-06-1",
    name: "/CC-06-1",
    component: () => import("@/components/06_jangmul_abi/CC_06_1_jangmul-abi"),
  },
  {
    path: "/CS-06-2-jangmul-abi",
    name: "/CS-06-2-jangmul-abi",
    component: () => import("@/components/06_jangmul_abi/CS_06_2_jangmul-abi"),
  },
  {
    path: "/CF-06-3-jangmul-abi",
    name: "/CF-06-3-jangmul-abi",
    component: () => import("@/components/06_jangmul_abi/CF_06_3_jangmul-abi"),
  },
  {
    path: "/CO-07-1-verric",
    name: "/CO-07-1-verric",
    component: () => import("@/components/07_varric/CO_07_1_verric"),
  },
  {
    path: "/CO-07-2-verric",
    name: "/CO-07-2-verric",
    component: () => import("@/components/07_varric/CO_07_2_verric"),
  },
  {
    path: "/CO-07-3-verric",
    name: "/CO-07-3-verric",
    component: () => import("@/components/07_varric/CO_07_3_verric"),
  },
  {
    path: "/AA-08-01-FF-08-2-hawke",
    name: "/AA-08-01-FF-08-2-hawke",
    component: () => import("@/components/08_hawke/AA_08_1_FF_08_2_hawke"),
  },
  {
    path: "/AT-08-3-AM-08-4_FT-08-5-FM-08-6-hawke",
    name: "/AT-08-3-AM-08-4_FT-08-5-FM-08-6-hawke",
    component: () =>
      import("@/components/08_hawke/AT_08_3_AM_08_4_FT_08_5_FM_08_6_hawke"),
  },
  {
    path: "/CC-09-1-gallows",
    name: "/CC-09-1-gallows",
    component: () => import("@/components/09_ gallows/CC_09_1_gallows"),
  },
  {
    path: "/EE-01",
    name: "/EE-01",
    component: () => import("@/components/10_Ending/EE_10_1"),
  },
  {
    path: "/EE-02",
    name: "/EE-02",
    component: () => import("@/components/10_Ending/EE_10_2"),
  },
  {
    path: "/EE-03",
    name: "/EE-03",
    component: () => import("@/components/10_Ending/EE_10_3"),
  },
  {
    path: "/EE-04",
    name: "/EE-04",
    component: () => import("@/components/10_Ending/EE_10_4"),
  },
];
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 }; // 최상단으로 스크롤
  }
};

const router = new VueRouter({
  routes,
  scrollBehavior,
});

export default router;
