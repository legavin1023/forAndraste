<template>
  <div>
    <div class="topImage hawke"></div>

    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              지금 호크가 앤더스와 공범이었다고 생각하고 있는거요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그렇지 않다는 걸 증명하기 위해서라도 호크에 대해 말씀해주실 것이
              있으시면-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              내가 할 말은 이미 새로운 템플러 기사단장과 다 끝냈고, 더 이상 날
              귀찮게 하지 않겠다고 약속까지 받았는데 이제 와서 또 뭘 증명하라는
              거요?
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌의 표정이 불쾌감으로 찌푸려졌다. 뭐라고 더 말을 하기도 전에 감렌은
        반쯤 강제적으로 바깥을 향해 내리끌기 시작했다. 힘을 준다면 그를 제압할
        수도 있지만, 템플러가 일반 시민을 상대로 무력을 행사할 수는 없는
        것이었다. <br /><br />
        게다가 '의심'만으로 커크월의 챔피언의 가족을 건드렸다는 소문이 나는
        것만큼 위험한 것도 없었다. 감렌이라는 자도 그것을 충분히 알고서 행동하는
        것처럼 보였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              집에 앤더스든 메이지든 없는 걸 확인하셨으니, 이만 돌아가보쇼.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        순식간에 호크의 집 문은 굳게 잠겨버렸다. 몇 차례 다시 노크했지만
        돌아오는 대답은 없었다.<br /><br />
        무언가 있는 게 분명했지만, 더 파고드는 것은 위험해보였다.<br />
        어쩔 수 없었다. <br /><br />일단은 기사단장이 있는 곳으로 복귀하기로
        결정했다.
      </p>
    </div>
    <div class="content">
      <div class="content-buttonBox">
        <input
          type="text"
          placeholder="여기에 입력해주세요."
          v-model="inputValue"
          @keyup.enter="checkInputValue"
        />
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
      inputValue: "",
    };
  },
  methods: {
    checkInputValue() {
      // if (this.inputValue === "gallows") {
      // 입력된 값이 'fortheandraste'와 일치하는 경우, 다른 뷰로 전환
      this.$router.push({ name: "/CC-09-1" });
      // }
    },
  },
};
</script>

<style></style>
