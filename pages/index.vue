<script setup lang="ts">
import { Notice } from "~/types";
import { Event } from "~/types";
import { mdiLinkBoxVariantOutline } from "@mdi/js";
const showNum = ref(0);
setInterval(() => {
  if (showNum.value === 0) showNum.value = 1;
  else if (showNum.value === 1) showNum.value = 2;
  else if (showNum.value === 2) showNum.value = 3;
  else if (showNum.value === 3) showNum.value = 4;
  else showNum.value = 0;
}, 5000);

const showNumClass = computed(() => (num: number) => {
  return {
    absolute: true,
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
    <template v-if="$device.isMobile">
      <base-animation class="relative h-[70vh]">
        <img src="https://dvso56c4dpyp.cloudfront.net/top_1.png" :class="showNumClass(0)" class="h-full object-cover mb-img back-background" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_1.png" :class="showNumClass(0)" class="h-full object-cover mb-img px-4 pb-4" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_2.png" :class="showNumClass(1)" class="h-full object-cover mb-img back-background" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_2.png" :class="showNumClass(1)" class="h-full object-cover mb-img px-4 pb-4" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_3.png" :class="showNumClass(2)" class="h-full object-cover mb-img back-background" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_3.png" :class="showNumClass(2)" class="h-full object-cover mb-img px-4 pb-4" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_4.png" :class="showNumClass(3)" class="h-full object-cover mb-img back-background" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_4.png" :class="showNumClass(3)" class="h-full object-cover mb-img px-4 pb-4" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_5.png" :class="showNumClass(4)" class="h-full object-cover mb-img back-background" />
        <img src="https://dvso56c4dpyp.cloudfront.net/top_5.png" :class="showNumClass(4)" class="h-full object-cover mb-img px-4 pb-4" />

        <img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_1.png" :class="{ 'w-1/3': $device.isMobile, 'w-1/5': !$device.isMobile }" class="absolute bottom-0 right-0 w-1/3" />
      </base-animation>

      <div class="top mt-4">
        <div class="circle-1 pa-10 mx-1">
          <base-title>メッセージ</base-title>
          <div class="leading-loose text-urubrown text-14b pt-4">
            一般社団法人うるの木では 様々な事業活動を通じ、「多様性」の理解を推進し、個々の特性や環境の違いを「面白い」と思える心を育み、ともに成長し、ともに笑いあえる地域社会を創造する“ことを基本理念とし、医療ケアや障がいなど、どんな特性を持った子どもでも一度しかない子ども時代を子どもらしく駆けぬけて欲しいという願いを待ち、
            子どもたちの居場所作りや家族支援，個々を認め合う地域作りに取り組んでいます。
          </div>
        </div>

        <v-row no-gutters>
          <v-col cols="4" class="pl-4"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_2.png" class="w-full" /></v-col>
          <v-col cols="8"></v-col>
        </v-row>

        <v-container fluid class="px-2">
          <base-animation class="px-4">
            <base-title>お知らせ</base-title>
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

          <v-row no-gutters>
            <v-col cols="8"></v-col>
            <v-col cols="4" class="pr-4"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_3.png" class="w-full" /></v-col>
          </v-row>

          <base-animation class="px-4 pb-4">
            <base-title>イベント情報</base-title>
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

          <v-row no-gutters>
            <v-col cols="4" class="pl-4"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_4.png" class="w-full" /></v-col>
            <v-col cols="8"></v-col>
          </v-row>

          <base-animation class="pa-4">
            <base-title>寄付のお願い</base-title>
          </base-animation>

          <v-row no-gutters>
            <v-col cols="8"></v-col>
            <v-col cols="4" class="pr-4"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_5.png" class="w-full" /></v-col>
          </v-row>

          <base-animation class="pa-4">
            <base-title>リンク</base-title>
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
          <v-row no-gutters>
            <v-col cols="4" class="pl-4"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy6.png" class="w-full" /></v-col>
            <v-col cols="8"></v-col>
          </v-row>
        </v-container>
      </div>
    </template>
    <template v-if="!$device.isMobile">
      <v-row no-gutters>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <base-animation class="relative h-[80vh]">
            <img src="https://dvso56c4dpyp.cloudfront.net/top_1.png" :class="showNumClass(0)" class="h-full object-cover desktop-img back-background" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_1.png" :class="showNumClass(0)" class="h-full object-cover desktop-img px-4 pb-4" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_2.png" :class="showNumClass(1)" class="h-full object-cover desktop-img back-background" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_2.png" :class="showNumClass(1)" class="h-full object-cover desktop-img px-4 pb-4" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_3.png" :class="showNumClass(2)" class="h-full object-cover desktop-img back-background" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_3.png" :class="showNumClass(2)" class="h-full object-cover desktop-img px-4 pb-4" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_4.png" :class="showNumClass(3)" class="h-full object-cover desktop-img back-background" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_4.png" :class="showNumClass(3)" class="h-full object-cover desktop-img px-4 pb-4" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_5.png" :class="showNumClass(4)" class="h-full object-cover desktop-img back-background" />
            <img src="https://dvso56c4dpyp.cloudfront.net/top_5.png" :class="showNumClass(4)" class="h-full object-cover desktop-img px-4 pb-4" />

            <img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy6.png" :class="{ 'w-1/3': $device.isMobile, 'w-1/12': !$device.isMobile }" class="absolute bottom-0 left-0 w-1/3" />

            <img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_1.png" :class="{ 'w-1/3': $device.isMobile, 'w-1/12': !$device.isMobile }" class="absolute bottom-0 right-0 w-1/3" />
          </base-animation>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <div class="top-desktop min-h-screen w-screen">
        <v-container class="px-4">
          <v-row no-gutters class="pt-20">
            <v-col cols="3"></v-col>
            <v-col cols="6">
              <div class="circle-1-desktop pa-10">
                <base-title>メッセージ</base-title>
                <div class="text-urubrown text-18b leading-loose">
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
              </div>
            </v-col>
            <v-col cols="3"></v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="1"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_2.png" class="w-full" /></v-col>
            <v-col cols="11"></v-col>
          </v-row>

          <base-animation class="px-4">
            <base-title>お知らせ</base-title>
            <ul class="mt-4 text-urubrown notice-wrapper">
              <li v-for="notice in noticeList" :key="`notice_${notice.id}`" class="notice mb-1 pa-1" v-ripple @click="goToNotice(notice.id)">
                <v-row no-gutters class="cursor-pointer">
                  <v-col cols="11" class="pl-4 py-2">
                    <v-row no-gutters class="text-16b">
                      <v-col cols="auto" class="text-14">{{ notice.postedDateDisplay }}</v-col>
                      <v-col class="whitespace-nowrap text-ellipsis overflow-hidden pl-4">{{ notice.title }}</v-col>
                    </v-row>
                    <div class="text-16 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">{{ notice.message }}</div>
                  </v-col>
                  <v-col cols="1">
                    <v-row no-gutters>
                      <v-col cols="6"></v-col>
                      <v-col cols="6" class="pt-2">
                        <div class="flex items-center h-12">
                          <span class="dli-caret-circle-fill-right"></span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </li>
            </ul>
          </base-animation>

          <v-row no-gutters>
            <v-col cols="11"></v-col>
            <v-col cols="1"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_3.png" class="w-full" /></v-col>
          </v-row>

          <base-animation class="px-4">
            <base-title>イベント情報</base-title>
            <ul class="mt-4 text-urubrown event-wrapper">
              <li v-for="eventData in eventList" :key="`event_${eventData.id}`" class="event mb-1 pa-1" v-ripple @click="goToEvent(eventData.id)">
                <v-row no-gutters class="cursor-pointer">
                  <v-col cols="11" class="pl-4 py-2">
                    <v-row no-gutters class="text-16b">
                      <v-col class="text-14">{{ eventData.insertDateDisplay }}</v-col>
                      <v-col cols="auto" class="whitespace-nowrap text-ellipsis overflow-hidden pl-4">{{ eventData.title }}</v-col>
                    </v-row>
                    <div class="text-16 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">{{ eventData.content }}</div>
                  </v-col>
                  <v-col cols="1">
                    <v-row no-gutters>
                      <v-col cols="6"></v-col>
                      <v-col cols="6">
                        <div class="flex items-center h-12">
                          <span class="dli-caret-circle-fill-right"></span>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </li>
            </ul>
          </base-animation>
          <v-row no-gutters>
            <v-col cols="1"><v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_boy_4.png" class="w-full" /></v-col>
            <v-col cols="11"></v-col>
          </v-row>
        </v-container>
      </div>
    </template>
  </div>
</template>
<style lang="postcss" scoped>
.daihyo-img {
  border-radius: 100% 100% 100% 100%;
}
.back-background {
  filter: opacity(0.3);
}
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
  background-color: rgba(255, 255, 255, 0.728);
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
  background-color: rgba(255, 255, 255, 0.728);
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

.top {
  background-repeat: repeat-y;
  background-size: contain;
}

.top-desktop {
  background-repeat: repeat-y;
  background-size: cover;
}

/* Circles */
.circle-1 {
  background: #fff;
  border-radius: 65% 65% 67% 70%/50% 72% 85% 50%;
  animation: border-animation 6s infinite linear;
  border: 3px solid #8c6d6585;
}

.circle-1-desktop {
  background: #fff;
  border-radius: 62% 65% 74% 28%/41% 64% 106% 50%;
  animation: border-animation 6s infinite linear;
  border: 3px solid #8c6d6585;
}

.daihyo-messeage {
  border-radius: 91% 35% 100% 52%/92% 72% 94% 38%;
  animation: border-animation 6s infinite linear;
}
.daihyo-message-content {
  background-color: #8c6d65de;
  border-radius: 65% 65% 67% 70%/50% 72% 85% 50%;
}
.desktop-img {
  border-radius: 0% 0% 250% 250%;
}
.mb-img {
  border-radius: 0% 0% 60% 60%/0% 0% 70% 25%;
}
</style>
