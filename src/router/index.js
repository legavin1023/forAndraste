import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 각 경로를 Base64로 인코딩합니다.
function encodePath(path) {
  return "/" + btoa(path);
}

// 인코딩된 경로를 디코딩합니다.
function decodePath(encodedPath) {
  try {
    return atob(encodedPath);
  } catch (error) {
    return encodedPath; // 디코딩에 실패하면 원래 경로를 반환
  }
}

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/mainPage"),
  },
  {
    path: encodePath("/CO-00-1"),
    name: "/CO-00-1",
    component: () => import("@/components/00_opening/CO_00_1_opening"),
  },
  {
    path: encodePath("/CO-01-1"),
    name: "/CO-01-1",
    component: () => import("@/components/01_kirkwall_harbor/CO_01_1_kirkwall"),
  },
  {
    path: encodePath("/CO-01-2"),
    name: "/CO-01-2",
    component: () => import("@/components/01_kirkwall_harbor/CO_01_2_kirkwall"),
  },
  {
    path: encodePath("/CO-02-1"),
    name: "/CO-02-1",
    component: () => import("@/components/02_chantry/CO_02_1_chantry"),
  },
  {
    path: encodePath("/CO-02-2"),
    name: "/CO-02-2",
    component: () => import("@/components/02_chantry/CO_02_2_chantry"),
  },
  {
    path: encodePath("/TT-03-1-MM-03-2"),
    name: "/TT-03-1-MM-03-2",
    component: () =>
      import("@/components/03_hanged_man/TT_03_1_MM_03_2_hangedman"),
  },
  {
    path: encodePath("/TT-03-3-MM-03-4"),
    name: "/TT-03-3-MM-03-4",
    component: () =>
      import("@/components/03_hanged_man/TT_03_3_MM_03_4_hangedman"),
  },
  {
    path: encodePath("/TT-03-5-MM-03-6"),
    name: "/TT-03-5-MM-03-6",
    component: () =>
      import("@/components/03_hanged_man/TT_03_5_MM_03_6_hangedman"),
  },
  {
    path: encodePath("/CC-04-1"),
    name: "/CC-04-1",
    component: () => import("@/components/04_anders_clinic/CC_04_1_anders"),
  },
  {
    path: encodePath("/CS-04-2"),
    name: "/CS-04-2",
    component: () => import("@/components/04_anders_clinic/CS_04_2_anders"),
  },
  {
    path: encodePath("/CF-04-3"),
    name: "/CF-04-3",
    component: () => import("@/components/04_anders_clinic/CF_04_3_anders"),
  },
  {
    path: encodePath("/AA-04-FF-04-5"),
    name: "/AA-04-FF-04-5",
    component: () =>
      import("@/components/04_anders_clinic/AA_04_FF_04_5_anders"),
  },
  {
    path: encodePath("/CC-05-1"),
    name: "/CC-05-1",
    component: () => import("@/components/05_fenris/CC_05_1_fenris"),
  },
  {
    path: encodePath("/FF-05-2-AA-05-03"),
    name: "/FF-05-2-AA-05-03",
    component: () => import("@/components/05_fenris/FF_05_2_AA_05_03_fenris"),
  },
  {
    path: encodePath("/CC-06-1"),
    name: "/CC-06-1",
    component: () => import("@/components/06_jangmul_abi/CC_06_1_jangmul-abi"),
  },
  {
    path: encodePath("/CS-06-2"),
    name: "/CS-06-2",
    component: () => import("@/components/06_jangmul_abi/CS_06_2_jangmul-abi"),
  },
  {
    path: encodePath("/CF-06-3"),
    name: "/CF-06-3",
    component: () => import("@/components/06_jangmul_abi/CF_06_3_jangmul-abi"),
  },
  {
    path: encodePath("/CO-07-1"),
    name: "/CO-07-1",
    component: () => import("@/components/07_varric/CO_07_1_verric"),
  },
  {
    path: encodePath("/CO-07-2"),
    name: "/CO-07-2",
    component: () => import("@/components/07_varric/CO_07_2_verric"),
  },
  {
    path: encodePath("/CO-07-3"),
    name: "/CO-07-3",
    component: () => import("@/components/07_varric/CO_07_3_verric"),
  },
  {
    path: encodePath("/AA-08-01-FF-08-2"),
    name: "/AA-08-01-FF-08-2",
    component: () => import("@/components/08_hawke/AA_08_1_FF_08_2_hawke"),
  },
  {
    path: encodePath("/AT-08-3-AM-08-4_FT-08-5-FM-08-6"),
    name: "/AT-08-3-AM-08-4_FT-08-5-FM-08-6",
    component: () =>
      import("@/components/08_hawke/AT_08_3_AM_08_4_FT_08_5_FM_08_6_hawke"),
  },
  {
    path: encodePath("/CF-08-7"),
    name: "/CF-08-7",
    component: () => import("@/components/08_hawke/CF_08_7_hawke"),
  },
  {
    path: encodePath("/CC-09-1"),
    name: "/CC-09-1",
    component: () => import("@/components/09_ gallows/CC_09_1_gallows"),
  },
  {
    path: encodePath("/EE-01"),
    name: "/EE-01",
    component: () => import("@/components/10_Ending/EE_10_1"),
  },
  {
    path: encodePath("/EE-02"),
    name: "/EE-02",
    component: () => import("@/components/10_Ending/EE_10_2"),
  },
  {
    path: encodePath("/EE-03"),
    name: "/EE-03",
    component: () => import("@/components/10_Ending/EE_10_3"),
  },
  {
    path: encodePath("/EE-04"),
    name: "/EE-04",
    component: () => import("@/components/10_Ending/EE_10_4"),
  },
  {
    path: encodePath("/ES-bad"),
    name: "/ES-bad",
    component: () => import("@/components/10_Ending/ES_14_1"),
  },
  {
    path: encodePath("/ES-good"),
    name: "/ES-good",
    component: () => import("@/components/10_Ending/ES_15_1"),
  },
  {
    path: encodePath("/*"),
    name: "/*",
    component: () => import("@/views/errPage"),
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

// 네비게이션 발생 전에 현재 경로가 인코딩되었는지 확인하고, 필요한 경우 디코딩합니다.
router.beforeEach((to, from, next) => {
  const decodedPath = decodePath(to.path);
  if (decodedPath !== to.path) {
    next(decodedPath);
  } else {
    next();
  }
});

export default router;
