<template>
  <div>
    <div class="topImage gallows"></div>
    <div class="content">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스가 어떻게 챈트리를 폭발시켰고, 어디로 갔는지 알아냈습니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 조금 놀란 듯이 자세를 고치고 고개를 살짝 숙였다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">설명해주겠나?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              앤더스의 진료소에 셀라 페트래와 드레이크 스톤이 있었던 걸로
              확인했습니다. 그리고 그 안에서 무언가 조합하는 실험이 있었던
              정황도 파악했습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              둘을 조합하면... 폭약이군. 양에 따라 다르겠지만 마법으로
              증폭했다면 위력을 키우는 건 일도 아니었겠지.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              가장 중요한 앤더스의 행방 건은- 일단 본핏으로 이어지는 것
              같습니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">본핏?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              예. 자세한 건 따로 보고를 올리겠습니다. 우선 지금은 그쪽에
              비밀통로가 있고 앤더스가 이를 확인했을 가능성이 커 보입니다. 그가
              살아있지 않더라도, 조사할 가치는 있어보입니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">흠.......</div>
          </li>
        </ul>
      </div>
      <p class="content-text">기사단장은 잠시 고민하는 듯 했다.</p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              그리고, 단장님. 한가지 더 말씀드리고 싶은 것이 있는데-
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">뭐지?</div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              수색과정에서 붉은 리륨에 대한- 수많은 경고를 접했습니다. 특히
              템플러로서는- 그곳을 수색하는 것이 몹시 위험할 것으로 보입니다.
              리륨에 강한 드워프도 현혹되었다고 합니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              붉은 리륨을 따라 들어가겠다는 말씀이십니까?
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        어느 새 합류한 컬렌이 사색이 되어 황급히 기사단장에게 다가왔다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait cullen"></div>
            <div class="content-dialog-text">
              재고해주십시오. 함부로 쫓아 들어갈 물건이 아닙니다! 지금도...
              유인이라도 하는 것처럼 흔적이 이어지는 것이- 몹시 불길합니다.
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              ...우리는 어디까지나 커크월을 지원하러 온 것이니- 커크월의
              기사단장이 그렇게 말한다면 굳이 위험을 감수하지는 않겠네.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        기사단장은 수색대를 해산하고, 딥로드 입구 주변에 템플러들이 함부로
        접근하지 않도록 조치를 취했다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait commander"></div>
            <div class="content-dialog-text">
              기사단장 좋아. 그럼....우리는 앤더스의 단서를 따라, 본핏으로
              향하도록 하지.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        그들은 컬렌과 커크월의 템플러들에게 인사를 건네고, 다시 떠날 준비를 한
        후 본핏으로 떠났다.<br />
        그곳에서부터 다시 시작된 앤더스의 흔적은, 그들을 또다른 모험의 길로
        이끌어갔다.<br /><br />
        붉은 리륨의 흔적이 이어져있던 딥로드의 통로가 매몰되어, 그 흔적을 완전히
        감춘 것은 얼마 지나지 않아서였다.
      </p>
      <div class="content-button ending mt90 pb70">
        <div class="varric"><span>베릭 테트라스의 메모에서</span></div>
        <button class="ending-button" @click="checkPath">
          <span>엔딩1</span>
          <p>공동수색 : 함께 앞으로</p>
        </button>
      </div>
    </div>
    <div class="bottomImage"></div>
  </div>
</template>

<script>
export default {
  methods: {
    checkPath() {
      this.$store.dispatch("terminateBackgroundAudio");
      this.$store.dispatch(
        "setBackgroundAudioSource",
        `${process.env.BASE_URL}assets/sound/ending_anders.mp3`
      );
      this.$store.dispatch("playBackgroundAudio");
      this.$router.push({ name: "/ES-good" });
    },
  },
};
</script>

<style></style>
