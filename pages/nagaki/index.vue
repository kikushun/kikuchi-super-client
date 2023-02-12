<script setup lang="ts">
definePageMeta({ layout: "nagaki" });
</script>
<template>
  <img src="@/assets/img/nagaki/seikotsuin.jpg" class="w-full" />
  <div class="h-96 bg-amber-200 flex">
    <div class="flex-1 p-4"><img src="@/assets/img/nagaki/nagaki_photo.png" class="rounded-full w-40 h-40 object-cover" /></div>
    <div class="flex-1 p-4"><img src="@/assets/img/nagaki/nagaki_sejutu.jpeg" class="rounded-full w-full" /></div>
  </div>
  <div class="h-96 bg-amber-400">
    <img class="clip triangle w-full" src="@/assets/img/nagaki/figure.jpeg" />
  </div>
  <div class="h-96 triangle">
    <base-icon name="dot-horizontal-circle-filled" color="black" />
  </div>
  <div><animation-text class="text-8xl">あいうえお</animation-text></div>
  <div><animation-text class="text-8xl">かきくけこ</animation-text></div>
  <div><animation-text class="text-8xl">さしすせそ</animation-text></div>
</template>
<style scoped>
.triangle {
  width: 0;
  height: 0;
  border-bottom: solid 180px transparent;
  border-top: solid 180px transparent;
  border-left: solid 180px transparent;
  border-right: solid 180px transparent;
}

.clip.triangle {
  clip-path: polygon(50% 0, 0 100%, 100% 100%);
}
</style>
