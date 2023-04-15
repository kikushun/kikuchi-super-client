<script setup lang="ts">
import { mdiMenu, mdiLinkBoxVariantOutline, mdiEmail } from "@mdi/js";
const carousel = ref(1);
const showNum = ref(0);
setInterval(() => {
  if (showNum.value === 0) showNum.value = 1;
  else showNum.value = 0;
}, 5000);

const showNumClass = computed(() => (num: number) => {
  return {
    absolute: true,
    "right-0": true,
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
      <base-animation v-if="$device.isMobile"><v-btn :icon="mdiMenu" /></base-animation>

      <div v-if="$device.isDesktop" class="flex items-center h-24 pl-2 pr-16">
        <base-animation v-ripple align="center" class="cursor-pointer uru-menu">
          <v-icon size="32px" color="#e4e284" class="uru-menu-img">{{ mdiEmail }}</v-icon>
          <h2 class="text-urubrown text-20b">お問い合わせ</h2>
        </base-animation>
      </div>
    </template>
    <v-row no-gutters :class="{ 'px-16': $device.isDesktop }">
      <v-col cols="auto">
        <v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_logo.png" class="w-24 h-24" />
      </v-col>
      <v-col cols="auto">
        <base-animation class="flex items-center h-24">
          <h1 class="text-urubrown">
            <div class="text-20">一般社団法人</div>
            <div class="text-28b">うるの木</div>
          </h1>
        </base-animation>
      </v-col>
      <template v-if="$device.isDesktop">
        <v-col cols="auto" class="ml-8">
          <div class="flex items-center h-24">
            <v-menu open-on-hover :close-delay="0" :open-delay="0" transition="slide-y-transition">
              <template v-slot:activator="{ props }">
                <base-animation v-ripple v-bind="props" align="center" class="cursor-pointer uru-menu">
                  <v-img src="https://dvso56c4dpyp.cloudfront.net/red_circle.png" class="w-8 uru-menu-img" />
                  <h2 class="text-urubrown text-20b">ごあいさつ</h2>
                </base-animation>
              </template>
              <v-list class="px-1 py-1">
                <v-list-item class="cursor-pointer title">
                  <v-list-item-title class="text-urubrown pa-2 uru-sub-menu text-20b">代表メッセージ</v-list-item-title>
                  <v-divider />
                  <v-list-item-title class="text-urubrown pa-2 uru-sub-menu text-20b">理事紹介</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </v-col>
        <v-col cols="auto" class="ml-8">
          <div class="flex items-center h-24">
            <base-animation v-ripple align="center" class="cursor-pointer uru-menu">
              <v-img src="https://dvso56c4dpyp.cloudfront.net/green_circle.png" class="w-8 uru-menu-img" />
              <h2 class="text-urubrown text-20b">イベント情報</h2>
            </base-animation>
          </div>
        </v-col>
        <v-col cols="auto" class="ml-8">
          <div class="flex items-center h-24">
            <base-animation v-ripple align="center" class="cursor-pointer uru-menu">
              <v-img src="https://dvso56c4dpyp.cloudfront.net/pink_circle.png" class="w-8 uru-menu-img" />
              <h2 class="text-urubrown text-20b">寄付のお願い</h2>
            </base-animation>
          </div>
        </v-col>
      </template>
    </v-row>
  </v-app-bar>
  <v-container fluid :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }">
    <base-animation v-if="$device.isDesktop" class="relative h-[70vh]">
      <div class="leading-loose pl-8 absolute h-full flex items-center text-urubrown text-20b z-30" align="center">
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
      </div>
      <img src="https://dvso56c4dpyp.cloudfront.net/carousel_7.png" :class="showNumClass(0)" class="h-full z-20" />
      <img src="https://dvso56c4dpyp.cloudfront.net/carousel_8.png" :class="showNumClass(1)" class="h-full z-20" />
    </base-animation>
    <base-animation v-if="$device.isMobile" class="relative h-48 mt-20">
      <img src="https://dvso56c4dpyp.cloudfront.net/carousel_mobile_1.png" :class="showNumClass(0)" class="w-full z-20" />
      <img src="https://dvso56c4dpyp.cloudfront.net/carousel_mobile_2.png" :class="showNumClass(1)" class="w-full z-20" />
    </base-animation>
  </v-container>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }">
    <v-row no-gutters :class="{ 'mt-10': $device.isMobile }">
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="px-4">
          <h2 class="title text-20b pl-2 py-1">代表メッセージ</h2>
          <div class="mt-4">
            <v-row no-gutters>
              <v-col cols="4">
                <v-img src="https://dvso56c4dpyp.cloudfront.net/representative_greeting.jpeg" class="w-full" />
              </v-col>
              <v-col cols="8" class="text-urubrown pl-4" :class="{ 'text-18': $device.isDesktop, 'text-16': $device.isMobile, 'pb-4': $device.isMobile }">
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
      </v-col>
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="px-4">
          <h2 class="title text-20b pl-2 py-1">お知らせ</h2>
          <ul class="mt-4 text-urubrown notice-wrapper">
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
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="pa-4">
          <h2 class="mt-8 title text-20b pl-2 py-1">理事紹介</h2>
        </base-animation>
      </v-col>
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="pa-4">
          <h2 class="mt-8 title text-20b pl-2 py-1">イベント情報</h2>
          <ul class="mt-4 text-urubrown notice-wrapper">
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
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="pa-4">
          <h2 class="mt-8 title text-20b pl-2 py-1">寄付のお願い</h2>
        </base-animation>
      </v-col>
      <v-col :cols="$device.isDesktop ? 6 : 12">
        <base-animation class="pa-4">
          <h2 class="mt-8 title text-20b pl-2 py-1">LINK</h2>
        </base-animation>
        <base-animation>
          <a href="https://instagram.com/urunoki1101?igshid=YmMyMTA2M2Y=">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-img src="https://dvso56c4dpyp.cloudfront.net/instagram_icon.png" class="w-10" />
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">うるの木</v-col>
            </v-row>
          </a>

          <a href="https://instagram.com/wacca1515?igshid=YmMyMTA2M2Y=">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-img src="https://dvso56c4dpyp.cloudfront.net/instagram_icon.png" class="w-10" />
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">WACCA</v-col>
            </v-row>
          </a>

          <a href="https://www.kohoku-yochien.com">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-icon size="40px" color="urubrown">{{ mdiLinkBoxVariantOutline }}</v-icon>
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">港北幼稚園</v-col>
            </v-row>
          </a>

          <a href="https://www.youyounomori.com">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-icon size="40px" color="urubrown">{{ mdiLinkBoxVariantOutline }}</v-icon>
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">ゆうゆうのもり幼保園</v-col>
            </v-row>
          </a>

          <a href="https://oyako-cocon.com">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-icon size="40px" color="urubrown">{{ mdiLinkBoxVariantOutline }}</v-icon>
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">育児発達支援室ここん</v-col>
            </v-row>
          </a>

          <a href="https://www.musubi.ne.jp">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-icon size="40px" color="urubrown">{{ mdiLinkBoxVariantOutline }}</v-icon>
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">訪問看護ステーションぶどう</v-col>
            </v-row>
          </a>

          <a href="https://nagaki-seikotsu.com">
            <v-row v-ripple no-gutters class="px-4 py-2 cursor-pointer">
              <v-col cols="auto">
                <v-icon size="40px" color="urubrown">{{ mdiLinkBoxVariantOutline }}</v-icon>
              </v-col>
              <v-col class="text-20 text-urubrown pl-1 pt-1">ながき鍼灸整骨院</v-col>
            </v-row>
          </a>
        </base-animation>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="postcss" scoped>
.title {
  color: #8c6d65;
  position: relative;
  background: #ebddd9;
  box-shadow: 0px 0px 0px 5px #ebddd9;
  border: dashed 2px white;
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

.uru-menu:hover > .uru-menu-img {
  @apply transform duration-200 -translate-y-2;
}

.about-bg-color {
  background-color: #eb80787a;
}
.uru-sub-menu:hover {
  color: #ffffff;
}
</style>
