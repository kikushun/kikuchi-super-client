<script setup lang="ts">
import { Notice } from "~/types";
import { Event } from "~/types";
import { mdiLinkBoxVariantOutline } from "@mdi/js";
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

const noticeList = ref<Notice[]>([]);
const config = useRuntimeConfig();
const { data } = await useFetch<Notice[]>("/notices", { baseURL: config.public.baseUrl });
noticeList.value = data.value ?? [];
const router = useRouter();
const goToNotice = (id: number) => {
  router.push(`/notice/${id}`);
};

const eventList = ref<Event[]>([]);
const { data: eventData } = await useFetch<Event[]>("/events", { baseURL: config.public.baseUrl });
eventList.value = eventData.value ?? [];
const goToEvent = (id: number) => {
  router.push(`/event/${id}`);
};
</script>

<template>
  <div>
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
            <h2 class="title text-20b pl-2 py-1">
              <v-row no-gutters>
                <v-col>代表メッセージ</v-col>
                <v-col cols="auto">
                  <v-btn to="/representative-greeting" variant="text" size="small" flat class="text-urubrown text-14b">もっと見る</v-btn>
                </v-col>
              </v-row>
            </h2>
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
            <h2 class="title text-20b pl-2 py-1">
              <v-row no-gutters>
                <v-col>お知らせ</v-col>
                <v-col cols="auto">
                  <v-btn to="/notice" variant="text" size="small" flat class="text-urubrown text-14b">一覧画面へ</v-btn>
                </v-col>
              </v-row>
            </h2>
            <ul class="mt-4 text-urubrown notice-wrapper">
              <li v-for="notice in noticeList" :key="`notice_${notice.id}`" class="notice mb-1 pa-1" v-ripple @click="goToNotice(notice.id)">
                <v-row no-gutters class="cursor-pointer">
                  <v-col cols="11">
                    <v-row no-gutters class="text-16b">
                      <v-col cols="5" class="text-14">{{ notice.postedDateDisplay }}</v-col>
                      <v-col cols="7" class="whitespace-nowrap text-ellipsis overflow-hidden">{{ notice.title }}</v-col>
                    </v-row>
                    <div class="text-16 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">{{ notice.message }}</div>
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
            <h2 class="mt-8 title text-20b pl-2 py-1">
              <v-row no-gutters>
                <v-col>理事紹介</v-col>
                <v-col cols="auto">
                  <v-btn to="/director-introduction" variant="text" size="small" flat class="text-urubrown text-14b">もっと見る</v-btn>
                </v-col>
              </v-row>
            </h2>
          </base-animation>
        </v-col>
        <v-col :cols="$device.isDesktop ? 6 : 12">
          <base-animation class="pa-4">
            <h2 class="mt-8 title text-20b pl-2 py-1">
              <v-row no-gutters>
                <v-col>イベント情報</v-col>
                <v-col cols="auto">
                  <v-btn to="/event" variant="text" size="small" flat class="text-urubrown text-14b">一覧画面へ</v-btn>
                </v-col>
              </v-row>
            </h2>
            <ul class="mt-4 text-urubrown event-wrapper">
              <li v-for="eventData in eventList" :key="`event_${eventData.id}`" class="event mb-1 pa-1" v-ripple @click="goToEvent(eventData.id)">
                <v-row no-gutters class="cursor-pointer">
                  <v-col cols="11">
                    <v-row no-gutters class="text-16b">
                      <v-col cols="5" class="text-14">{{ eventData.insertDateDisplay }}</v-col>
                      <v-col cols="7" class="whitespace-nowrap text-ellipsis overflow-hidden">{{ eventData.title }}</v-col>
                    </v-row>
                    <div class="text-16 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">{{ eventData.content }}</div>
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
            <h2 class="mt-8 title text-20b pl-2 py-1">
              <v-row no-gutters>
                <v-col>寄付のお願い</v-col>
                <v-col cols="auto">
                  <v-btn to="/donation" variant="text" size="small" flat class="text-urubrown text-14b">もっと見る</v-btn>
                </v-col>
              </v-row>
            </h2>
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
  </div>
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

.event-wrapper {
  border-top: 1px solid #8c6d65;
}

.event {
  transition: all 0.1s;
  border-bottom: 1px solid #8c6d65;
}

.event:hover {
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
