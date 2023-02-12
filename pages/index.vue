<template>
  <div class="h-screen w-screen flex justify-center items-center text-7xl">indexページ</div>
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
