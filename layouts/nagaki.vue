<script setup lang="ts">
const isShowMenu = ref(false);
const menuClass = computed(() => {
  return {
    "opacity-0": !isShowMenu.value,
    "opacity-100": isShowMenu.value,
  };
});
</script>

<template>
  <div data-theme="nagaki">
    <!-- ヘッダー -->
    <base-header class="navbar fixed z-30 h-20">
      <base-icon name="nagaki/logo" class="flex-none w-20" filled />
      <div class="flex-1 text-xl"></div>
      <div class="flex-none">
        <button class="relative group" @click="isShowMenu = !isShowMenu">
          <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all duration-200">
            <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div class="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left" :class="{ 'translate-x-10': isShowMenu }"></div>
              <div class="bg-black h-[2px] w-7 rounded transform transition-all duration-300 delay-75" :class="{ 'translate-x-10': isShowMenu }"></div>
              <div class="bg-black h-[2px] w-7 transform transition-all duration-300 origin-left delay-150" :class="{ 'translate-x-10': isShowMenu }"></div>

              <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 flex w-0" :class="{ 'translate-x-0': isShowMenu, 'w-12': isShowMenu }">
                <div class="absolute bg-black h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300" :class="{ 'rotate-45': isShowMenu }"></div>
                <div class="absolute bg-black h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300" :class="{ '-rotate-45': isShowMenu }"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </base-header>
    <!-- メニュー -->
    <div class="w-screen h-screen fixed z-20 bg-neutral transition-opacity duration-500 ease-in-out pt-20" :class="menuClass">
      <div align="center">aiueo</div>
      <div align="center">aiueo</div>
      <div align="center">aiueo</div>
      <div align="center">aiueo</div>
      <div align="center" class="h-screen bg-primary">aiueo</div>
    </div>
    <!-- メイン -->
    <main class="z-10 relative pt-20">
      <slot />
    </main>
  </div>
</template>
