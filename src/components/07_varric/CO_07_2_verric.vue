<template>
  <div>
    <div class="arrow-container verric">
      <img
        src="@/assets/07_varric/arrow.png"
        alt="화살 이미지"
        class="arrow"
        v-if="showArrow"
      />
    </div>
    <div class="topImage"></div>
    <div class="content">
      <p class="content-text">
        문을 열고 들어가자마자 어깨 위를 스치고 지나가는 화살에 반사적으로 몸을
        숙였다. <br />
        햇빛을 등지고 2층 위에 서 있는 한 사람의 실루엣이 비췄다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-image varric"></div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              문을 따고 들어온 이유를 제대로 설명하지 못하면 다음에는 머리야.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        벽에 꽂힌 석궁 화살은 아직도 충격에 흔들리고 있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              이번에 커크월에 지원 온 템플러입니다. 배릭 테트라스씨 되십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              아하, 아벨린이 질색하는 얼굴이 그려지는 걸.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        배릭이 1층으로 천천히 내려왔다. 석궁은 여전히 이쪽을 겨눈 채 였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              아직 내 집에 문을 따고 들어온 이유를 못들었는데.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              죄송합니다. 앤더스와... 붉은 리륨에 대해 조사를 하다가 단서가
              있을까 해서 들어왔습니다. 무단침입은 맞습니다만, 무언가 훔치려던
              것은 아니고...
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              그래, 앤더스가 개같은 일을 벌이긴 했지. 그런데 이게 템플러의 수습
              방식인가?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그의 시신이 발견되지 않은 상태라... 저는 그의 행방을 쫓고
              있습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              그놈이 내 집에 숨어있을 것 같았고?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              이번에 커크월에 지원 온 템플러입니다. 배릭 테트라스씨 되십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              그보다는- 호크와 가까이 지내셨다고 들어서.... 붉은 리륨도 같이
              수습하신 적이 있다고....
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        배릭은 호크를 언급하자 한숨을 쉬며 등 뒤로 석궁을 넘겼다. 무장이 해제된
        건 다행이었지만, 당연하게도 그는 몹시 불쾌해보였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              내가 할 말은 많지 않을 것 같은데.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">테트라스씨....</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              붉은 리륨은 나도 내 형이 그거에 홀린 걸 떨쳐낼 때 잠깐 본 게
              다고... 호크는... 애들 듣는 영웅 이야기라도 듣고 싶은 건 아니지?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">친구이지 않으셨습니까?</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              그래, 내가 내 ‘친구’ 호크에 대해서, 멋대로 침입한 당신에게 왜
              말해주겠어? 뭐, 날 가둬놓고 신문이라도 할 건가?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              ...하지만 앤더스가 살아있다면-그 위험성에 대해서는 알고 계시지
              않으십니까.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              그것에 대해서는 할 말이 더더욱 없어. 나도 어디로 사라졌는지는
              모르고. 당신이 찾고 있는 게 앤더스가 맞는지도 모르겠고.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예?</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              시신이든, 사람이든 어쨌든- 그게 ‘지금도’ 앤더스일지는 모르는
              일이잖아?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그의 몸에 악마라도 들어갔다는 겁니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              <span class="textLine">악마가 아닐 수도 있지.</span> 들어간 건지,
              불러들인 건지도 알 수 없고.
            </div>
          </li>
        </ul>
      </div>
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
  data: function () {
    return {
      showArrow: true,
      inputValue: "", // 입력된 값 저장을 위한 변수
    };
  },
  mounted() {
    // 페이지가 로드되면 화살 애니메이션을 시작합니다.
    setTimeout(() => {
      this.showArrow = false;
    }, 2000); // 2초 후에 화살을 숨깁니다. 애니메이션 시간에 맞춰 조절하세요.
  },
  methods: {
    checkInputValue() {
      // if (this.inputValue === "justice") {
      // 입력된 값이 'justice'와 일치하는 경우, 다른 뷰로 전환
      this.$router.push({ path: "/CO-07-3-verric" });
      // }
    },
  },
};
</script>

<style scoped>
.arrow-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  animation: slideDown 2s ease-in-out forwards;
}

.arrow {
  position: absolute;
  top: -500px; /* 보이지 않는 위치에서 시작 */
  animation: slideDown 2s ease-in-out forwards;
}
.content {
  z-index: 10;
}
@keyframes slideDown {
  0% {
    transform: translateY(-100px);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(calc(100vh + 100px)); /* 보이지 않는 위치로 이동 */
    opacity: 0;
    display: none;
  }
}
</style>
