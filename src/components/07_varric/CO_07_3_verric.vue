<template>
  <div>
    <div class="topImage verric"></div>
    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              난 그날 왜 그런 일이 벌어졌는지 아직도 받아들이지 못했어. 그냥
              앤더스가 죽었다고 생각하고 있고.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        모호한 답변만을 남긴 채, 배릭은 현관 쪽으로 성큼성큼 걸어와 문가에 놓인
        짐을 들었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              호크는... 여기서 잃은 게 너무 많아. 우리의 챔피언을 너무 괴롭히지
              말라고.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">어디로... 떠나시나요?</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              나도 당분간 커크월에서 떨어져 있으려고. 가벼운 여행 정도로.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        배릭은 문 근처에 떨어진 자물쇠를 땄던 흔적을 내려다보며 한숨을 쉬었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              호크의 집도 이렇게 턴 건 아니겠지?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              ...아닙니다. 아직 가보지 않았습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">'아직'이란 말이지....</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              아뇨, 그러니까- 아직 털지 않았다는 게 아니라, 말그대로 아직 가보지
              않았다는 겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">배릭은 조금 웃은 것 같았다.</p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">자물쇠를 바꿔야겠네.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">.....죄송합니다.</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              호크 집에는 감렌이라고, 아주 까칠한 삼촌이 남아 있을테니 섣불리
              열쇠구멍에 손부터 뻗진 말라고. 그 사람한테는 당신네들 권위로
              정면승부하는 게 차라리 나을거야.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크의 가족이 커크월에 남아있습니까?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">그래. 하나 뿐이지만.</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">알려주셔서 감사합니다.</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              당신때문에 아 벨린이 고통받지 않게 하려고 한거니까 됐어. 참,
              그리고 당신.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">....예?</div>
          </li>
          <li>
            <div class="content-dialog-portrait verrics"></div>
            <div class="content-dialog-text">
              배릭은 커크월 항구 쪽으로 사라졌다. 이제 이 모든 것과 이어진
              호크의 흔적을 직접 마주하는 일만이 남아있었다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">배릭은 조금 웃은 것 같았다.</p>
      <div class="puzzle">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="{
            flipped: card.flipped,
            matched: card.matched,
            selected: card.selected,
          }"
          @click="flipCard(index)"
        >
          <div v-if="!card.flipped">
            <Card_back></Card_back>
          </div>
          <component
            :is="'Card_' + card.value"
            v-else
            :key="card.value + '-' + index"
          ></component>
        </div>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
import Card_1 from "@/components/07_varric/card/Card_1.vue";
import Card_2 from "@/components/07_varric/card/Card_2.vue";
import Card_3 from "@/components/07_varric/card/Card_3.vue";
import Card_4 from "@/components/07_varric/card/Card_4.vue";
import Card_5 from "@/components/07_varric/card/Card_5.vue";
import Card_6 from "@/components/07_varric/card/Card_6.vue";
import Card_7 from "@/components/07_varric/card/Card_7.vue";
import Card_8 from "@/components/07_varric/card/Card_8.vue";
import Card_back from "@/components/07_varric/card/Card_back.vue";
export default {
  components: {
    Card_1,
    Card_2,
    Card_3,
    Card_4,
    Card_5,
    Card_6,
    Card_7,
    Card_8,
    Card_back,
  },
  data: function () {
    return {
      cards: [],
      flips: 999,
      selectedCards: [],
      selectedCardIndices: [],
      currentCardValue: null,
    };
  },
  created() {
    this.initializeCards();
  },
  computed: {
    cardSVGs() {
      return this.cards.map((card) => {
        return this.svgs[card.value];
      });
    },
    allMatched() {
      return this.cards.every((card) => card.matched);
    },
  },

  methods: {
    getCardComponent(value) {
      return "Card_" + value;
    },
    initializeCards() {
      for (let i = 1; i <= 8; i++) {
        this.cards.push({
          value: i,
          flipped: false,
          matched: false,
          selected: false,
        });
        this.cards.push({
          value: i,
          flipped: false,
          matched: false,
          selected: false,
        });
      }
      this.shuffleArray(this.cards);
    },
    shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    },
    flipCard(index) {
      if (
        this.flips <= 0 ||
        this.cards[index].flipped ||
        this.cards[index].matched
      ) {
        return;
      }

      if (this.selectedCards.length === 1) {
        // 하나만 선택한 경우
        this.cards[index].selected = true;
        this.cards[index].flipped = true;
        this.selectedCards.push(this.cards[index]);

        // 'value' 속성이 존재하고 두 번째 카드가 선택된 경우
        if (this.selectedCards[0].value === this.selectedCards[1].value) {
          this.selectedCards[0].matched = true;
          this.selectedCards[1].matched = true;
          this.selectedCards[0].selected = false;
          this.selectedCards[1].selected = false;
          this.selectedCards = []; // 초기화

          // 정답인 경우 초록색으로 변경
          this.cards[index].matched = true;
        } else {
          this.flips--;

          setTimeout(() => {
            // 두 카드가 일치하지 않을 때만 빨강으로 변경
            if (this.selectedCards.length === 2) {
              this.selectedCards[0].selected = false;
              this.selectedCards[1].selected = false;

              // 1초 후에 카드를 다시 뒷면으로 돌려놓음
              setTimeout(() => {
                this.selectedCards[0].flipped = false;
                this.selectedCards[1].flipped = false;
                this.selectedCards = []; // 초기화
              }, 1000);
            }
          }, 300);
        }
      } else if (this.selectedCards.length === 0) {
        // 아무 카드도 선택되지 않은 경우
        this.cards[index].selected = true;
        this.cards[index].flipped = true;
        this.selectedCards.push(this.cards[index]);
      }
      if (this.allMatched) {
        setTimeout(() => {
          this.$router.push({ path: "/AA-08-01-FF-08-2-hawke" });
        }, 1000);
      }
    },
  },
};
</script>

<style lang="scss">
.puzzle {
  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  width: 900px;
  margin: auto;
}
.flipped {
  svg {
    rect:first-of-type {
      fill: #e59292;
      stroke: #c72929;
    }
  }
}
.selected {
  svg {
    rect:first-of-type {
      fill: #978568;
      stroke: #796849;
    }
  }
}
.matched {
  svg {
    rect:first-of-type {
      fill: #9ac2a0;
      stroke: #299239;
    }
  }
}
</style>
