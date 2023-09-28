<template>
  <div>
    <div class="topImage gallows"></div>
    <div class="content">
      <p class="content-text">
        서둘러 기사단장이 지시했던 갤로우즈로 향했다. <br /><br />
        지지부진한 수색에 시달리고 있을 것이라고 생각했던 것과 달리, 현장은
        미묘하게 들떠 어수선하고 약간 흥분에 차 있었다.<br />
        서둘러 모여있는 템플러들 사이를 헤치고 앞으로 나아가자, 기사단장이
        심각하게 무언가 고민하고 있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              기사단장님. 복귀했습니다. 무슨 일 있습니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              아, 마침 잘됐군. 이쪽으로 오게. 붉은 리륨의 흔적을 찾아서 수색대를
              꾸리던 참이었네.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">붉은 리륨...말씀이십니까?</div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              그래. 잔해를 치우는 과정에서 딥로드로 향하는 통로가 드러났네.
              그리고 안 쪽으로 이어지는 붉은 리륨의 파편이 확인됐고. 아마
              메러디스를 끌고 간 흔적이 아닌가 싶은데.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장이 가리킨 어두컴컴하고 커다란 구멍 안 쪽에 약간의 붉은 돌가루가
        반짝이고 있었다.<br />
        마치 따라 들어오라는 듯이, 컴컴하고 탁한 공기가 들어찬 안쪽으로 그
        흔적을 이어가고 있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              앤더스 수색은 어떻게 됐나? 진전이 없으면 일단 수색대에 합류 하는게
              좋겠네.
            </div>
          </li>
        </ul>
      </div>
      <div class="content-button mt70">
        <button @click="EE_10_1()" :disabled="!bothSuccess('pv1', 'pv2')">
          앤더스가 어떻게 챈트리를 폭발시켰고, 어디로 갔는지 알아냈습니다.
        </button>
        <button @click="EE_10_2()" :disabled="!firstSuccessOnly('pv1', 'pv2')">
          앤더스가 챈트리를 폭발시킨 방법은 짐작이 가지만... <br />
          행방은 더 알아봐야 합니다.
        </button>
        <button @click="EE_10_3()" :disabled="!secondSuccessOnly('pv1', 'pv2')">
          앤더스가 어떻게 챈터리를 폭발시켰는지는 못찾았지만,<br />
          어디로 갔는지 짐작가는 곳이 있습니다
        </button>
        <button @click="EE_10_4()" :disabled="!bothFailed('pv1', 'pv2')">
          앤더스에 대해서 알아내지 못했습니다.
        </button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  methods: {
    EE_10_1() {
      this.$router.push({ name: "/EE-01" });
    },
    EE_10_2() {
      this.$router.push({ name: "/EE-02" });
    },
    EE_10_3() {
      this.$router.push({ name: "/EE-03" });
    },
    EE_10_4() {
      this.$router.push({ name: "/EE-04" });
    },
    bothSuccess(key1, key2) {
      const value1 = localStorage.getItem(key1);
      const value2 = localStorage.getItem(key2);
      return value1 === "2" && value2 === "1";
    },
    firstSuccessOnly(key1, key2) {
      const value1 = localStorage.getItem(key1);
      const value2 = localStorage.getItem(key2);
      return value1 == "2" && value2 !== "1";
    },
    secondSuccessOnly(key1, key2) {
      const value1 = localStorage.getItem(key1);
      const value2 = localStorage.getItem(key2);
      return value1 !== "2" && value2 == "1";
    },
    bothFailed(key1, key2) {
      const value1 = localStorage.getItem(key1);
      const value2 = localStorage.getItem(key2);
      return value1 !== "2" && value2 !== "1";
    },
  },
};
</script>

<style></style>
