<template>
  <div class="base-background-color">
    <v-app>
      <slot />
    </v-app>
  </div>
</template>
<style scoped>
.base-background-color {
  background-color: #fffbf4;
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
