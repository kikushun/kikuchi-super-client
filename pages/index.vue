<script setup lang="ts">
import { mdiMenu } from "@mdi/js";
const showNum = ref(0);
setInterval(() => {
  if (showNum.value === 0) showNum.value = 1;
  else showNum.value = 0;
}, 6000);

const showNumClass = computed(() => (num: number) => {
  return {
    absolute: true,
    "h-full": true,
    "w-full": true,
    "object-cover": true,
    transition: true,
    "duration-[4000ms]": true,
    "ease-in-out": true,
    "opacity-0": num !== showNum.value,
    "opacity-100": num === showNum.value,
  };
});
</script>

<template>
  <v-app-bar :elevation="0" height="24px" flat color="#fffbf494">
    <template v-slot:append>
      <v-btn :icon="mdiMenu"></v-btn>
    </template>
    <v-row no-gutters>
      <v-col cols="auto">
        <v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_logo.png" class="w-24 h-24" />
      </v-col>
      <v-col cols="auto">
        <div class="flex items-center h-24">
          <h1 class="main-color">
            <div class="text-20">一般社団法人</div>
            <div class="text-28b">うるの木</div>
          </h1>
        </div>
      </v-col>
    </v-row>
  </v-app-bar>
  <div class="h-24"></div>
  <div class="w-screen">
    <base-animation>
      <div class="relative h-48 w-screen">
        <img src="https://dvso56c4dpyp.cloudfront.net/carousel_1.png" :class="showNumClass(0)" />
        <img src="https://dvso56c4dpyp.cloudfront.net/carousel_2.png" :class="showNumClass(1)" />
      </div>
    </base-animation>
  </div>
  <v-container>
    <base-animation class="mt-5 main-color text-14" align="center">
      一般社団法人うるの木では<br />
      ”様々な事業活動を通じ、「多様性」の理解を推進し、<br />
      個々の特性や環境の違いを「面白い」と思える心を育み、<br />
      ともに成長し、ともに笑いあえる地域社会を創造する“<br />
      ことを基本理念とし、医療ケアや障がいなど、<br />
      どんな特性を持った子どもでも<br />
      一度しかない子ども時代を<br />
      子どもらしく駆けぬけて欲しいという願いを待ち、<br />
      子どもたちの居場所作りや家族支援，<br />
      個々を認め合う地域作りに取り組んでいます。
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">お知らせ</h2>
      <ul class="mt-4 main-color notice-wrapper">
        <li class="notice mb-1 pa-1" v-ripple>
          <v-row no-gutters class="cursor-pointer">
            <v-col cols="11">
              <v-row no-gutters class="text-16b">
                <v-col cols="4">2023.03.08</v-col>
                <v-col cols="8">タイトル</v-col>
              </v-row>
              <div class="text-14 pt-1">テキストテキストテキストテキスト</div>
            </v-col>
            <v-col cols="1">
              <div class="flex items-center h-12">
                <span class="dli-caret-circle-fill-right"></span>
              </div>
            </v-col>
          </v-row>
        </li>
        <li class="notice mb-1 pa-1" v-ripple>
          <v-row no-gutters class="cursor-pointer">
            <v-col cols="11">
              <v-row no-gutters class="text-16b">
                <v-col cols="4">2023.03.08</v-col>
                <v-col cols="8">タイトル</v-col>
              </v-row>
              <div class="text-14 pt-1">テキストテキストテキストテキスト</div>
            </v-col>
            <v-col cols="1">
              <div class="flex items-center h-12">
                <span class="dli-caret-circle-fill-right"></span>
              </div>
            </v-col>
          </v-row>
        </li>
        <li class="notice mb-1 pa-1" v-ripple>
          <v-row no-gutters class="cursor-pointer">
            <v-col cols="11">
              <v-row no-gutters class="text-16b">
                <v-col cols="4">2023.03.08</v-col>
                <v-col cols="8">タイトル</v-col>
              </v-row>
              <div class="text-14 pt-1">テキストテキストテキストテキスト</div>
            </v-col>
            <v-col cols="1">
              <div class="flex items-center h-12">
                <span class="dli-caret-circle-fill-right"></span>
              </div>
            </v-col>
          </v-row>
        </li>
        <li class="notice mb-1 pa-1" v-ripple>
          <v-row no-gutters class="cursor-pointer">
            <v-col cols="11">
              <v-row no-gutters class="text-16b">
                <v-col cols="4">2023.03.08</v-col>
                <v-col cols="8">タイトル</v-col>
              </v-row>
              <div class="text-14 pt-1">テキストテキストテキストテキスト</div>
            </v-col>
            <v-col cols="1">
              <div class="flex items-center h-12">
                <span class="dli-caret-circle-fill-right"></span>
              </div>
            </v-col>
          </v-row>
        </li>
        <li class="notice mb-1 pa-1" v-ripple>
          <v-row no-gutters class="cursor-pointer">
            <v-col cols="11">
              <v-row no-gutters class="text-16b">
                <v-col cols="4">2023.03.08</v-col>
                <v-col cols="8">タイトル</v-col>
              </v-row>
              <div class="text-14 pt-1">テキストテキストテキストテキスト</div>
            </v-col>
            <v-col cols="1">
              <div class="flex items-center h-12">
                <span class="dli-caret-circle-fill-right"></span>
              </div>
            </v-col>
          </v-row>
        </li>
      </ul>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">代表メッセージ</h2>
      <div class="mt-4">
        <v-row no-gutters>
          <v-col cols="4">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/representative_greeting.jpeg" class="w-full" />
          </v-col>
          <v-col cols="8" class="main-color text-14 pl-4">
            代表理事 長岐 裕美<br />
            株式会社ながき 夫婦経営<br />
            ながき鍼灸整骨院 副院長<br />
            鍼灸師/エステティシャン<br />
            のびのび遊べる・つながる場<br />
            wacca代表<br />
          </v-col>
        </v-row>
      </div>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">理事紹介</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">児童発達支援</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">WACCA</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">イベント情報</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">寄付のお願い</h2>
    </base-animation>

    <base-animation><h2 class="mt-8 title text-20b">問い合わせ</h2></base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">理事紹介</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">児童発達支援</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">WACCA</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">イベント情報</h2>
    </base-animation>

    <base-animation>
      <h2 class="mt-8 title text-20b">寄付のお願い</h2>
    </base-animation>

    <base-animation><h2 class="mt-8 title text-20b">問い合わせ</h2></base-animation>
  </v-container>
</template>
<style scoped>
.main-color {
  color: #8c6d65;
}

.title {
  color: #8c6d65;
  position: relative;
  background: #ebddd9;
  box-shadow: 0px 0px 0px 5px #ebddd9;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
}

.title:before {
  position: absolute;
  content: "";
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #8c6d65;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

ul li {
  list-style-type: none !important;
}

.dli-caret-circle-fill-right {
  display: inline-block;
  vertical-align: middle;
  color: #8c6d65;
  line-height: 1;
  position: relative;
  width: 0.8em;
  height: 0.8em;
  border: 0.1em solid currentColor;
  background: currentColor;
  border-radius: 50%;
  box-sizing: content-box;
}

.dli-caret-circle-fill-right::before {
  content: "";
  color: #fff;
  width: 0;
  height: 0;
  border-style: solid;
  border-color: transparent;
  border-width: 0.18em 0.31177em;
  border-left-color: currentColor;
  border-right: 0;
  transform: translateX(15%);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.notice-wrapper {
  border-top: 1px solid #8c6d65;
}

.notice {
  transition: all 0.1s;
  border-bottom: 1px solid #8c6d65;
}

.notice:hover {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  border-color: transparent;
}
</style>
