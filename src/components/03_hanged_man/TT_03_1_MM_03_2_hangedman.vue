<template>
  <div>
    <transition name="fade">
      <eyesFadeOutVue v-if="showComponent" />
    </transition>
    <div class="topImage hanged"></div>
    <div class="content">
      <p class="content-text mt26">
        행드맨의 묵직한 문을 밀어내자, 조금 소란스럽던 실내가 잠시 조용해지면서
        이쪽으로 시선이 쏠렸다가, 천천히 흩어졌다. <br />
        커크월 사람들과 부상자들이 뒤섞여 휴식을 취하고 있는 눅눅하고 따뜻한
        실내는, 유일하게 이 재앙 이전의 커크월의 모습이 남겨진 곳처럼 보였다.
        <br />
        구석진 곳 한편에 놓인 템플러 방패 덕분에, 컬렌을 알아보는 건 어렵지
        않았다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              기사단장 러더포드, 맞으십니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-image cullen"></div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">그렇습니다만. 누구시죠?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">이번 커크월에 지원하러 온-</div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">아! 그게 오늘이었죠.</div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        컬렌은 입가에 검지손가락을 대어 신호한 뒤, 손짓하여 거리를 좁혔다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">그냥 컬렌이라고 불러주십시오.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">예. 그 부상은 이번 사태 때?</div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              아뇨. 엊그제 새로 생긴 부상입니다. 커크월은 원래도 행인에게 친절한
              곳이 아니니까요. 그렇다쳐도 이번에는 수가 좀 많았습니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        컬렌은 멋쩍게 조금 웃어보였지만, 그것이 지친 기색을 숨겨주지는 못했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              붉은 리륨에 대해 알아보러 오셨습니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              제 임무는 그게 아닙니다만... 전 기사단장이 붉은 리륨에
              집어삼켜졌다는 게 사실입니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              정확히는- 붉은 리륨 그 자체가 되어버렸다고 해야할까요... 지금은
              그마저도 사라졌습니다. 그 덕분에 이곳의 템플러들은 리륨에 대한
              불신이 생겨나기 시작했고요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그건 본인에게도 해당되는 말입니까?
            </div>
          </li>
        </ul>
      </div>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              ...잘 모르겠습니다. 메러디스가 붉은 리륨 때문에 잘못된 명령을
              내려온 것이라면, 그 명령을 그대로 따랐던 저는 왜 그랬던 걸까요?
              과연 그 타락이 '붉은' 리륨 때문이었을까요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              눈앞에서 그런 일이 벌어졌으니 이해합니다. 하지만 리륨은-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              이제 제가 기사단장이니 이러면 안되지만, 어떤 게 옳은 것인지 아직도
              혼란스럽기만 합니다. 제가 이러니 이 사태를 막을 수 있었던 기회를
              눈뜨고도 놓친 거겠죠.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              자책하실 필요 없습니다.... 비난 받아야할 것은 앤더스가 아닙니까.
            </div>
          </li>
        </ul>
        <ul v-if="route === 'AT' || route === 'FT'">
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              그럴까요.... 그나마 호크가, 커크월의 챔피언이 템플러의 편에서
              싸워준 것이, 우리가 아주 틀리지만은 않았다는 것을 보여주는 것
              같아서- 그걸 위안으로 삼고있는 지경입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크가 템플러의 편에서 싸웠나요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              예. 메러디스가 그런 호크를 죽이라고 명령하고나서야, 제 정신은 그
              타락에서 벗어날 수 있었습니다.
            </div>
          </li>
        </ul>

        <ul v-if="route === 'AM' || route === 'FM'">
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              이 사태에 템플러의 책임이 전혀 없다고 할 순 없습니다. 그래서
              호크가, 커크월의 챔피언이 메이지의 편에서 싸웠던 것이겠지요.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크가 메이지의 편에서 싸웠나요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              예. 하지만 메이지에 대한 맹목적인 신뢰는 아니었던 것 같습니다.
              그보다는- 메러디스와, 거기에 따른 템플러들의 행동에 대한 저항에
              가까웠습니다. 실제로 메러디스가 그렇게 된 후에는 템플러측에 어떤
              것도 요구하지 않았고요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text" v-if="route === 'AT' || route === 'FT'">
        호크가 템플러의 편에서 메이지 반란을 진압했다니, 상황이 생각보다
        복잡해보였다.
      </p>
      <p class="content-text" v-if="route === 'AM' || route === 'FM'">
        호크가 메이지의 편에 섰지만, 반란에 동조한 것은 아니었다- 상황이
        생각보다 복잡해보였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              컬렌 죄송합니다. 말이 많았군요. 임무가 붉은 리륨에 대한 게
              아니라고 하셨죠. <br />
              <span>어떤 것 때문에 오셨습니까?</span>
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
import eyesFadeOutVue from "@/components/05_fenris/eyes/eyesFadeOut.vue";

export default {
  components: {
    // particleBoxVue;
    eyesFadeOutVue,
  },
  data() {
    return {
      inputValue: "",
      love: localStorage.getItem("love"),
      route: localStorage.getItem("route"),
      showComponent: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showComponent = false;
    }, 6000);
  },
  methods: {
    checkInputValue() {
      // if (this.inputValue === "anders") {
      // 입력된 값이 'fortheandraste'와 일치하는 경우, 다른 뷰로 전환
      this.$router.push("/TT-03-3-MM-03-4");
      // }
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
