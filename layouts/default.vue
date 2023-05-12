<script setup lang="ts">
import { mdiMenu, mdiEmail } from "@mdi/js";
const router = useRouter();
const goToEventList = () => {
  router.push(`/event`);
};
const goToDanation = () => {
  router.push(`/donation`);
};
const goToContact = () => {
  router.push(`/contact`);
};
const drawer = ref(false);
</script>
<template>
  <v-app>
    <v-app-bar :elevation="0" height="24px" flat color="#ffffff80">
      <template v-slot:append>
        <base-animation v-if="$device.isMobile"><v-btn :icon="mdiMenu" @click="drawer = !drawer" color="#8c6d65" /></base-animation>
        <div v-if="$device.isDesktop" class="flex items-center h-24 pl-2 pr-16">
          <base-animation v-ripple align="center" class="cursor-pointer uru-menu" @click="goToContact()">
            <v-icon size="32px" color="#e4e284" class="uru-menu-img">{{ mdiEmail }}</v-icon>
            <h2 class="text-urubrown text-20b">お問い合わせ</h2>
          </base-animation>
        </div>
      </template>
      <v-row no-gutters :class="{ 'px-16': $device.isDesktop }">
        <v-col cols="auto">
          <nuxt-link to="/">
            <v-img src="https://dvso56c4dpyp.cloudfront.net/urunoki_logo.png" class="w-24 h-24" />
          </nuxt-link>
        </v-col>
        <v-col cols="auto">
          <nuxt-link to="/">
            <base-animation class="flex items-center h-24">
              <h1 class="text-urubrown">
                <div class="text-20">一般社団法人</div>
                <div class="text-28b">うるの木</div>
              </h1>
            </base-animation>
          </nuxt-link>
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
                    <v-list-item-title class="text-urubrown pa-2 uru-sub-menu text-20b"><nuxt-link to="/representative-director">代表理事</nuxt-link></v-list-item-title>
                    <v-divider />
                    <v-list-item-title class="text-urubrown pa-2 uru-sub-menu text-20b"><nuxt-link to="/directors">理事紹介</nuxt-link></v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </v-col>
          <v-col cols="auto" class="ml-8">
            <div class="flex items-center h-24">
              <base-animation v-ripple align="center" class="cursor-pointer uru-menu" @click="goToEventList()">
                <v-img src="https://dvso56c4dpyp.cloudfront.net/green_circle.png" class="w-8 uru-menu-img" />
                <h2 class="text-urubrown text-20b">イベント情報</h2>
              </base-animation>
            </div>
          </v-col>
          <v-col cols="auto" class="ml-8">
            <div class="flex items-center h-24">
              <base-animation v-ripple align="center" class="cursor-pointer uru-menu" @click="goToDanation()">
                <v-img src="https://dvso56c4dpyp.cloudfront.net/pink_circle.png" class="w-8 uru-menu-img" />
                <h2 class="text-urubrown text-20b">寄付のお願い</h2>
              </base-animation>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary location="right" color="#ede28d">
      <div class="mt-32 mx-4 text-urubrown text-18b">
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/representative-director" class="text-urubrown">代表理事</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/directors" class="text-urubrown">理事紹介</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/notice" class="text-urubrown">お知らせ</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/event" class="text-urubrown">イベント情報</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/donation" class="text-urubrown">寄付のお願い</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/donation" class="text-urubrown">WACCA</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/donation" class="text-urubrown">児童発達支援</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
        <v-row no-gutters v-ripple class="h-12 mt-2 bg-[#ffffffb0]">
          <v-col class="pl-4">
            <div class="flex items-center h-12"><nuxt-link to="/contact" class="text-urubrown">お問い合わせ</nuxt-link></div>
          </v-col>
          <v-col cols="auto" class="pr-4">
            <div class="flex items-center h-12"><span class="dli-caret-circle-fill-right"></span></div>
          </v-col>
        </v-row>
      </div>
    </v-navigation-drawer>
    <div :class="{ 'background-size-pc': $device.isDesktop, 'background-size-sp': $device.isMobile }" class="base-background">
      <slot />
    </div>
  </v-app>
</template>
<style lang="postcss" scoped>
.base-background {
  background-image: url("https://dvso56c4dpyp.cloudfront.net/urunoki_base_background.png");
  background-repeat: repeat;
  min-width: 100vw;
  min-height: 100vh;
}
.background-size-pc {
  background-size: 40%;
}
.background-size-sp {
  background-size: contain;
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
