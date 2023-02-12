<template>
  <div class="base-background-color">
    <slot />
  </div>
</template>
<style scoped>
.base-background-color {
  background-color: #fff5e1;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 1s;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>
