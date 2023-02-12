<script setup lang="ts">
const showNum = ref(0);
setInterval(() => {
  if (showNum.value === 0) showNum.value = 1;
  else if (showNum.value === 1) showNum.value = 2;
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
  <div class="relative h-screen w-screen">
    <base-animation class="absolute top-0 left-0">
      <div class="relative h-screen w-screen">
        <img src="@/assets/img/kikuchi/oden.png" :class="showNumClass(0)" />
        <img src="@/assets/img/kikuchi/oden_2.jpeg" :class="showNumClass(1)" />
        <img src="@/assets/img/kikuchi/dashi_1.jpeg" :class="showNumClass(2)" />
      </div>
    </base-animation>
    <base-animation class="absolute top-0 left-0 w-screen h-screen flex justify-center items-center">
      <img src="@/assets/icons/kikuchi/logo.png" class="w-60 h-60" />
    </base-animation>
  </div>

  <base-animation :translate-y="true"> <about-main /></base-animation>

  <base-animation :translate-y="true">
    <div class="flex h-80 pt-8">
      <div class="flex-initial pl-4">
        <nuxt-link to="/kikuchi/shops">SHOPS</nuxt-link>
      </div>
      <div class="flex-initial pl-4">
        <nuxt-link to="/kikuchi/recruit">RECRUIT</nuxt-link>
      </div>
      <div class="flex-initial pl-4">
        <nuxt-link to="/kikuchi/company">COMPANY</nuxt-link>
      </div>
      <div class="flex-initial pl-4">
        <nuxt-link to="/kikuchi/access">ACCESS</nuxt-link>
      </div>
    </div>
  </base-animation>

  <div class="h-80"></div>
</template>
