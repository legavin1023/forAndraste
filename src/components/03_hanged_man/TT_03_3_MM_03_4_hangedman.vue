<template>
  <div @mousemove="drawBlack($event)">
    <div class="topImage hanged"></div>
    <div class="paintArea" @mousemove="drawBlack($event)" ref="paintArea"></div>
    <div class="content">
      <div class="content-button mt26">
        <div
          id="target-area"
          class="target-area content-button-ink"
          @mouseenter="showSecondButton"
        >
          <!-- @mouseenter="showSecondButton" -->
          <button
            v-if="secondButtonVisible"
            @click="checkPath()"
            @mouseenter="drawCircleOnButton"
          >
            물러선다
          </button>
        </div>
      </div>

      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">앤더스, 말씀이시죠.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예, 그리고 말씀하셨던 호크는 아직도 커크월에 있습니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              아뇨. 떠난지 꽤 됐습니다. '여행'이라고 한 걸 보니 영영 떠난 것은
              아닌 것 같지만, 그리 빨리 돌아올 것 같지도 않군요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">어디로 갔는지 아십니까?</div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">그걸 저한테 알려줬겠습니까.</div>
          </li>
        </ul>
      </div>
      <p class="content-text">컬렌은 조금 허탈하게 웃었다가, 급히 수습했다.</p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              미안합니다. 비꼬려던 건 아니었고- 그저... 저는 호크에게 몇 번
              도움을 받긴 했지만, 자세히 알지는 못합니다. 제가 도움이 될만한
              정보를 드릴 수 있을지 모르겠군요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크가 앤더스를 죽였다는 소문이 있다고 들었습니다.
            </div>
          </li>
          <li v-if="route === 'AT' || route === 'FT'">
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              예. 챈트리가 그렇게 된 직후에 그 이야기가 돌았죠. 호크가 템플러의
              편에서 싸웠으니, 소문은 점점 진실처럼 받아들여지기 시작했고요.
              하지만 반대로 앤더스를 설득해서 템플러 측에서 자신이 저지른 일을
              수습하게 했다느니 하는 소문도 있을 정도니, 진상은 모르겠군요. 제가
              직접 본 것도 아니고, 무엇보다 수습 과정에서 그의 시신을 발견하지도
              못했습니다.
            </div>
          </li>
          <li v-if="route === 'AM' || route === 'FM'">
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              예. 챈트리가 그렇게 된 직후에 그 이야기가 돌았죠. 하지만 호크는
              메이지의 편에 섰으니, 그럴만한 이유가 있었을지는 모르겠습니다.
              반대로 호크가 도망치게 했다든지, 숨겨두었다든지- 저도 소문은 참
              다양하게도 들었습니다. 진상은 모르겠군요. 제가 직접 본것도
              아니고.... 다만, 수습 과정에서 그의 시신을 발견하지 못한 건
              확실합니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              시신이 있었다면, 누군가가 그걸 숨길 이유가 있을까요? 혹시 호크가-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait manA"></div>
            <div class="content-dialog-text">뭐야, 당신도 템플러야?</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        언제부터 듣고 있었던 것인지 술에 어지간히 취한 듯이 보이는 남자 하나가
        시비를 걸어왔다. <br />
        그 사람의 말에 다른 사람들의 시선이 다시 한 번 이쪽에 쏠린 건 당연했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait manA"></div>
            <div class="content-dialog-text">
              어디 템플러가 호크니 뭐니 꼬치꼬치 파고들어?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait manB"></div>
            <div class="content-dialog-text">템플러가 호크를 쫓는다고?</div>
          </li>
        </ul>
      </div>

      <p class="content-text">
        부정할 틈을 주지 않고 쏟아지는 추궁에, 사람들의 시선이 점점 이쪽으로
        몰렸다. <br />이들에게 호크는 이 재앙 마저 끝마친 영웅이었다.<br />이
        이상 시비에 휘말리는 것은 막아야 했다.
      </p>

      <div class="content-button-ink">
        <button @click="clickFirstButton">흔적 지우기</button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstButtonClicked: false,
      secondButtonVisible: false,
      paintBlack: false,
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
    };
  },
  beforeRouteLeave(to, from, next) {
    this.paintBlack = false;
    this.clearDrawnCircles();
    next();
  },

  methods: {
    clickFirstButton() {
      this.firstButtonClicked = true;
      this.paintBlack = true;
    },
    showSecondButton() {
      this.secondButtonVisible = true;
    },
    checkPath() {
      this.$router.push({ path: "/TT-03-5-MM-03-6" });
    },
    drawBlack(event) {
      if (!this.paintBlack) return;

      const x = event.clientX;
      const y = event.clientY + window.scrollY; // 스크롤 위치를 추가

      const circle = document.createElement("div");
      circle.className = "drawn-circle";
      circle.style.position = "absolute";
      circle.style.width = "500px";
      circle.style.height = "500px";
      circle.style.backgroundColor = "black";
      circle.style.borderRadius = "50%";
      circle.style.left = `${x - 250}px`;
      circle.style.top = `${y - 250}px`;

      document.body.appendChild(circle);
    },
    drawCircleOnButton(event) {
      const button = event.currentTarget;
      const boundingBox = button.getBoundingClientRect();

      const x = boundingBox.left + boundingBox.width / 2;
      const y = boundingBox.top + boundingBox.height / 2;

      const circle = document.createElement("div");
      circle.className = "drawn-circle";
      circle.style.position = "absolute";
      circle.style.width = "10px";
      circle.style.height = "10px";
      circle.style.backgroundColor = "black";
      circle.style.borderRadius = "50%";
      circle.style.left = `${x - 5}px`;
      circle.style.top = `${y - 5}px`;

      document.body.appendChild(circle);
    },
    clearDrawnCircles() {
      const circles = document.querySelectorAll(".drawn-circle");
      circles.forEach((circle) => {
        circle.remove();
      });
    },
  },
};
</script>

<style scoped>
.target-area {
  position: absolute;
  top: 1900px;
  right: 900px;
  z-index: 100;
}
.content-button {
  z-index: 1000;
}
.paintArea {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 4500px;
  position: relative;
  z-index: 10;
}
</style>
