<template>
  <div>
    <div class="topImage hawke"></div>

    <div class="content" v-if="route === 'AT'">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크한테 뭘 더 알아내야할 게 있기라도 합니까? 템플러 편에 섰으면
              충분한 것 아니요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크를 의심하고 있는 게 아닙니다. 호크와 앤더스가 연인관계였으니,
              앤더스가 호크 앞에서는 미처 숨기지 못한 흔적을 남기지 않았을까
              싶어서- 호크의 도움을 받고 싶은 겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌은 조금 망설이는 듯하다가, 1층에 있는 널따란 책상으로 안내했다.
        공용으로 쓰였던 것으로 보이는 책상 아래 쪽에는 커다란 보관함이 놓여
        있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크가 커크월에서 쓰다가 두고 간 물건은 거기에 다 있을거요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌에게 감사인사를 하고, 보관함을 열었다. 온갖 무기와 보호구들 사이에
        장부와 책, 봉투 같은 것들이 찌그러져 있었다. <br /><br />
        장부를 펼쳐보니, 장비와 물약에 대한 구입기록과, 전달한 사람의 이름이
        적혀 있었다.그 사이에는 물론 앤더스라는 이름이 끼워져 있었다.<br />
        아벨린, 펜리스, 배릭과 같이 익숙한 이름도 찾아볼 수 있었다.
        <br /><br />그 다음으로 많이 닳아보이는 수첩 하나를 꺼냈다.<br />그
        수첩에는 명백히 앤더스과 관련된 내용이 담겨 있었다.
      </p>
      <div class="content-text-letter">
        <p class="content-text">
          앤더스의 안에 있는 저스티스의 영은 나를 그다지 달갑지 않게 여기는 것
          같다.<br />
          앤더스의 몸에 묶여서 강제로 나와 연애하게 된 거니까 당연한건지도
          모르겠지만. <br />(그런데 난 저스티스와 함께 뒤엉킨 그를 사랑하고
          있으니, 이건 일종의 짝사랑인가?)<br /><br />
          템플러를 향한 저스티스의 적대감은 때때로 나에게 번질 때가 있지만,
          그것때문에 내 감정을 양보할 생각은 없다. <br />그러니까, '더 좋은
          선택을 하라느니'하는 소리를 그만 좀 지껄였으면 좋겠다.<br />
          보고 있지. 앤더스. 지금 뒤에서 보고 있는 거 다 알아.
        </p>
      </div>

      <p class="content-text">
        저스티스.... 이미 앤더스는 영에게 지배되어 있는 상태였다는 말인가.<br />
        아니다, 호크는 그것을 ‘뒤엉킨’ 상태라고 표현했다. 앤더스 안에 영이
        공존했던 것이다. <br /><br />흔히 볼 수 있는 일이 아니었다. 그
        아슬아슬한 균형은 수많은 사람의 목숨을 도박에 거는 것이나 마찬가지일
        것이었다. 이번 커크월의 재앙은 그 균형이 제대로 무너져내린 것일지도
        몰랐다.<br /><br />
        배릭의 말이 떠올랐다. 과연 지금 쫓고 있는 대상이 '앤더스'가 맞는가.
        <br /><br /><br /><br />다음 장을 넘겼다.<br />커다란 용이 그려져
        있었고, 그 아래로는 휘갈긴 글씨와 함께 커크월과 이어지는 지도가
        대략적으로 그려져 있었다. 모든 선은 ‘본핏’이라는 곳으로 이어지고
        있었다.<br />눈에 띄는 다른 글씨는 ‘얇은 장막’ ‘비밀 통로’ ‘메이지
        피난?’과 같은 것들이었다.<br /><br />
        그리고 그 다음장을 넘기자, 낡은 지도가 하나 끼워져 있었다. 회색감시자
        표식이 찍힌 딥로드의 지도였다.<br />빨간색 잉크로 마구 표시된 곳이
        있었다. ‘붉은 리륨’ ‘어떻게?’ ‘접근금지’ ‘템플러에게 경고할 것’ 등의
        글씨가 같은 색 잉크로 휘갈겨 있었다.<br /><br />
        본핏 지도에 적힌 글씨의 서체와, 딥로드 지도에 적힌 서체는 달랐다. 앞의
        호크의 일기로 봤을 때, 본핏에 적힌 것은 호크가 적은 것이 아니었다.
        진료소에서 봤던 그 편지의, 그 필체였다. <br /><br /><br /><br />
        <span>앤더스의 행방을 따라 찾아가봐야하는 곳</span>을 알 것 같았다.
      </p>
    </div>
    <div class="content" v-if="route === 'AM'">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크한테 뭘 더 알아내야할 게 있기라도 합니까? 지금 템플러 편을
              들지 않았다고 보복이라도 하겠다는 거요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              전혀 아닙니다. 호크와 앤더스가 연인관계였으니, 앤더스가 호크
              앞에서는 미처 숨기지 못한 흔적을 남기지 않았을까 싶어서- 호크의
              도움을 받고 싶은 겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌은 조금 망설이는 듯하다가, 1층에 있는 널따란 책상으로 안내했다.
        공용으로 쓰였던 것으로 보이는 책상 아래 쪽에는 커다란 보관함이 놓여
        있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크가 커크월에서 쓰다가 두고 간 물건은 거기에 다 있을거요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌에게 감사인사를 하고, 보관함을 열었다. 온갖 무기와 보호구들 사이에
        장부와 책, 봉투 같은 것들이 찌그러져 있었다. <br /><br />장부를
        펼쳐보니, 장비와 물약에 대한 구입기록과, 전달한 사람의 이름이 적혀
        있었다.<br />그 사이에는 물론 앤더스라는 이름이 끼워져 있었다.<br />
        아벨린, 펜리스, 배릭과 같이 익숙한 이름도 찾아볼 수 있었다.<br /><br />
        그 다음으로 많이 닳아보이는 수첩 하나를 꺼냈다.<br />그 수첩에는 명백히
        앤더스과 관련된 내용이 담겨 있었다.
      </p>
      <div class="content-text-letter">
        <p class="content-text">
          앤더스의 안에 있는 저스티스의 영은 나를 그다지 달갑지 않게 여기는 것
          같다.<br />
          앤더스의 몸에 묶여서 강제로 나와 연애하게 된 거니까 당연한건지도
          모르겠지만. <br />(그런데 난 저스티스와 함께 뒤엉킨 그를 사랑하고
          있으니, 이건 일종의 짝사랑인가?)<br /><br />
          템플러를 향한 저스티스의 적대감은 때때로 나에게 번질 때가 있지만,
          그것때문에 내 감정을 양보할 생각은 없다.<br />
          그러니까, '더 좋은 선택을 하라느니'하는 소리를 그만 좀 지껄였으면
          좋겠다.<br />
          보고 있지. 앤더스. 지금 뒤에서 보고 있는 거 다 알아.
        </p>
      </div>

      <p class="content-text">
        저스티스.... 이미 앤더스는 영에게 지배되어 있는 상태였다는 말인가.<br />
        아니다, 호크는 그것을 ‘뒤엉킨’ 상태라고 표현했다. 앤더스 안에 영이
        공존했던 것이다.<br /><br />
        흔히 볼 수 있는 일이 아니었다. 그 아슬아슬한 균형은 수많은 사람의 목숨을
        도박에 거는 것이나 마찬가지일 것이었다. 이번 커크월의 재앙은 그 균형이
        제대로 무너져내린 것일지도 몰랐다.<br /><br />
        배릭의 말이 떠올랐다. 과연 지금 쫓고 있는 대상이 '앤더스'가 맞는가.<br /><br /><br /><br />다음
        장을 넘겼다.<br />커다란 용이 그려져 있었고, 그 아래로는 휘갈긴 글씨와
        함께 커크월과 이어지는 지도가 대략적으로 그려져 있었다. 모든 선은
        ‘본핏’이라는 곳으로 이어지고 있었다.<br />
        눈에 띄는 다른 글씨는 ‘얇은 장막’ ‘비밀 통로’ ‘메이지 피난?’과 같은
        것들이었다.<br /><br />
        그리고 그 다음장을 넘기자, 낡은 지도가 하나 끼워져 있었다. 회색감시자
        표식이 찍힌 딥로드의 지도였다.<br />빨간색 잉크로 마구 표시된 곳이
        있었다. ‘붉은 리륨’ ‘어떻게?’ ‘접근금지’ ‘메이지도 안전하지 않다’ 등의
        글씨가 같은 색 잉크로 휘갈겨 있었다. <br />본핏 지도에 적힌 글씨의
        서체와, 딥로드 지도에 적힌 서체는 달랐다. 앞의 호크의 일기로 봤을 때,
        본핏에 적힌 것은 호크가 적은 것이 아니었다. 진료소에서 봤던 그 편지의,
        그 필체였다.<br /><br /><br /><br />
        <span>앤더스의 행방을 따라 찾아가봐야하는 곳</span>을 알 것 같았다.
      </p>
    </div>
    <div class="content" v-if="route === 'FT'">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크한테 뭘 더 알아내야할 게 있기라도 합니까? 템플러 편에 섰으면
              충분한 것 아니요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              호크를 의심하고 있는 게 아닙니다. 앤더스가 사건 직전에 '친구'로서
              함께 했던 것은 호크 뿐이니... 앤더스가 호크 앞에서는 미처 숨기지
              못한 흔적을 남기지 않았을까 싶어서, 호크의 도움을 받고 싶은
              겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌은 조금 망설이는 듯하다가, 1층에 있는 널따란 책상으로 안내했다.
        공용으로 쓰였던 것으로 보이는 책상 아래 쪽에는 커다란 보관함이 놓여
        있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크가 커크월에서 쓰다가 두고 간 물건은 거기에 다 있을거요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌에게 감사인사를 하고, 보관함을 열었다. 온갖 무기와 보호구들 사이에
        장부와 책, 봉투 같은 것들이 찌그러져 있었다.<br />
        <br />장부를 펼쳐보니, 장비와 물약에 대한 구입기록과, 전달한 사람의
        이름이 적혀 있었다.<br />앤더스와 펜리스는 물론이고. 아벨린과 배릭과
        같이 익숙한 이름도 찾아볼 수 있었다.<br /><br />
        그 다음으로 많이 닳아보이는 수첩 하나를 꺼냈다.<br />그 수첩에는
        펜리스와 관련된 내용이 담겨 있었다.
      </p>
      <div class="content-text-letter">
        <p class="content-text">
          펜리스의 몸에 있는 문신은 리륨 성분으로 이루어져있다고 했는데,
          괜찮은건지 모르겠다.<br />
          템플러들도 리륨 부작용에 시달리는데, 몸에 계속 리륨을 새기고 있는 게
          괜찮을 리 없다.<br />
          드네리우스 밑에 노예로 있을때 당한 것 중 하나라고는 들었는데....
          <br /><br />안 좋은 증상 같은 게 있으면 펜리스가 먼저 슬쩍
          얘기해줬으면 좋겠는데.<br />
          아~ 펜리스가 먼저 얘기해줬으면 좋겠다. 잘생긴 엘프가 먼저 말해주면
          정말 좋을텐데. 멋진 펜리스. 글을 읽을 줄 아니까 좋지 않아?내가
          이렇게-. 알았어, 펜리스. 그만할게.
        </p>
      </div>

      <p class="content-text">
        일기로 시작해 일방적인 필담으로 끝나는 글이었다.<br />
        몸에 리륨 문신을 새겼다고? 좀처럼 상상하기 어려웠다. 하지만
        테빈터라면... '총애하는' 엘프 노예에게 그런 '상'을 내리는 놈이 있을 수도
        있었다.<br />
        리륨과 붉은 리륨. 머리가 복잡해졌다. 이번 사건에 다시 집중해야했다.<br /><br /><br /><br />
        다음 장을 넘겼다.<br />커다란 용이 그려져 있었고, 그 아래로는 휘갈긴
        글씨와 함께 커크월과 이어지는 지도가 대략적으로 그려져 있었다. 모든 선은
        ‘본핏’이라는 곳으로 이어지고 있었다.<br />
        눈에 띄는 다른 글씨는 ‘얇은 장막’ ‘비밀 통로’ ‘앤더스 확인?’과 같은
        것들이었다. <br /><br />그리고 그 다음장을 넘기자, 낡은 지도가 하나
        끼워져 있었다. 회색감시자 표식이 찍힌 딥로드의 지도였다.<br />빨간색
        잉크로 마구 표시된 곳이 있었다. ‘붉은 리륨’ ‘어떻게?’ ‘접근금지’
        ‘템플러에게 경고할 것’ 등의 글씨가 같은 색 잉크로 휘갈겨 있었다.<br /><br />
        다시 앞으로 수첩을 넘겼다. 비밀통로, 앤더스의 이름까지....<br />
        수첩을 덮은 손이 초조하게 그 표면을 두드렸다.<br /><br /><br /><br />
        <span>앤더스의 행방을 따라 찾아가봐야하는 곳</span>을 알 것 같았다.
        어쩌면 호크의 행방까지도.
      </p>
    </div>
    <div class="content" v-if="route === 'FM'">
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크한테 뭘 더 알아내야할 게 있기라도 합니까? 지금 템플러 편을
              들지 않았다고 보복이라도 하겠다는 거요?
            </div>
          </li>
          <li>
            <div class="content-dialog-portrait"></div>
            <div class="content-dialog-text">
              전혀 아닙니다. 앤더스가 사건 직전에 '친구'로서 함께 했던 것은 호크
              뿐이니... 앤더스가 호크 앞에서는 미처 숨기지 못한 흔적을 남기지
              않았을까 싶어서, 호크의 도움을 받고 싶은 겁니다.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌은 조금 망설이는 듯하다가, 1층에 있는 널따란 책상으로 안내했다.
        공용으로 쓰였던 것으로 보이는 책상 아래 쪽에는 커다란 보관함이 놓여
        있었다.
      </p>
      <div class="content-dialog">
        <ul>
          <li>
            <div class="content-dialog-portrait gam"></div>
            <div class="content-dialog-text">
              호크가 커크월에서 쓰다가 두고 간 물건은 거기에 다 있을거요.
            </div>
          </li>
        </ul>
      </div>
      <p class="content-text">
        감렌에게 감사인사를 하고, 보관함을 열었다. 온갖 무기와 보호구들 사이에
        장부와 책, 봉투 같은 것들이 찌그러져 있었다.<br /><br />
        장부를 펼쳐보니, 장비와 물약에 대한 구입기록과, 전달한 사람의 이름이
        적혀 있었다.<br />앤더스와 펜리스는 물론이고. 아벨린과 배릭과 같이
        익숙한 이름도 찾아볼 수 있었다.<br /><br />
        그 다음으로 많이 닳아보이는 수첩 하나를 꺼냈다.<br />그 수첩에는
        펜리스와 관련된 내용이 담겨 있었다.
      </p>
      <div class="content-text-letter">
        <p class="content-text">
          펜리스의 몸에 있는 문신은 리륨 성분으로 이루어져있다고 했는데,
          괜찮은건지 모르겠다. 템플러들도 리륨 부작용에 시달리는데, 몸에 계속
          리륨을 새기고 있는 게 괜찮을 리 없다. 드네리우스 밑에 노예로 있을때
          당한 것 중 하나라고는 들었는데....<br /><br />
          안 좋은 증상 같은 게 있으면 펜리스가 먼저 슬쩍 얘기해줬으면 좋겠는데.
          <br />아~ 펜리스가 먼저 얘기해줬으면 좋겠다. 잘생긴 엘프가 먼저
          말해주면 정말 좋을텐데. 멋진 펜리스. 글을 읽을 줄 아니까 좋지
          않아?내가 이렇게-. 알았어, 펜리스. 그만할게.
        </p>
      </div>
      <p class="content-text">
        일기로 시작해 일방적인 필담으로 끝나는 글이었다.<br />
        몸에 리륨 문신을 새겼다고? 좀처럼 상상하기 어려웠다. 하지만
        테빈터라면... '총애하는' 엘프 노예에게 그런 '상'을 내리는 놈이 있을 수도
        있었다.<br />
        리륨과 붉은 리륨. 머리가 복잡해졌다. 이번 사건에 다시 집중해야했다.<br /><br /><br /><br />다음
        장을 넘겼다.커다란 용이 그려져 있었고, 그 아래로는 휘갈긴 글씨와 함께
        커크월과 이어지는 지도가 대략적으로 그려져 있었다. 모든 선은
        ‘본핏’이라는 곳으로 이어지고 있었다.<br />
        눈에 띄는 다른 글씨는 ‘얇은 장막’ ‘비밀 통로’ ‘앤더스 확인?’과 같은
        것들이었다.<br /><br />그리고 그 다음장을 넘기자, 낡은 지도가 하나
        끼워져 있었다. 회색감시자 표식이 찍힌 딥로드의 지도였다.<br />빨간색
        잉크로 마구 표시된 곳이 있었다. ‘붉은 리륨’ ‘어떻게?’ ‘접근금지’
        ‘메이지도 안전하지 않다’ 등의 글씨가 같은 색 잉크로 휘갈겨 있었다.<br /><br />
        다시 앞으로 수첩을 넘겼다. 비밀통로, 앤더스의 이름까지....<br />
        수첩을 덮은 손이 초조하게 그 표면을 두드렸다.
        <br /><br /><br /><br /><span
          >앤더스의 행방을 따라 찾아가봐야하는 곳</span
        >을 알 것 같았다. 어쩌면 호크의 행방까지도.
      </p>
    </div>
    <div class="content">
      <div class="content-buttonBox">
        <input
          type="text"
          placeholder="여기에 입력해주세요."
          v-model="inputValue"
          @keyup.enter="checkInputValue"
          :class="{ 'shake-animation': shakeIt }"
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
      shakeIt: false, // 흔들림 애니메이션 활성화 플래그
      correctAnswer: "bonepit",
    };
  },
  methods: {
    checkInputValue() {
      if (this.inputValue === this.correctAnswer) {
        this.$router.push({ name: "/CC-09-1" });
        this.$store.dispatch("playCorrectSound");
      } else {
        this.$store.dispatch("playWrongSound");
        this.shakeIt = true;
        setTimeout(() => {
          this.shakeIt = false;
        }, 600);
      }
    },
  },
};
</script>

<style>
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10% {
    transform: translateX(-10px);
  }
  20% {
    transform: translateX(10px);
  }
  30% {
    transform: translateX(-10px);
  }
  40% {
    transform: translateX(10px);
  }
  50% {
    transform: translateX(-10px);
  }
  60% {
    transform: translateX(10px);
  }
  70% {
    transform: translateX(-10px);
  }
  80% {
    transform: translateX(10px);
  }
  90% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake-animation {
  animation: shake 0.6s;
}
</style>
