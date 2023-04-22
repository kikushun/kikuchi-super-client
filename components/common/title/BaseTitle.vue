<template>
  <v-row no-gutters>
    <v-col></v-col>
    <v-col cols="auto"><div class="mt-1 diamond"></div></v-col>
    <v-col cols="auto">
      <div class="mt-3 px-4 mx-2 border-b-2 border-urubrown"></div>
    </v-col>
    <v-col cols="auto">
      <div class="text-urubrown text-20b"><slot></slot></div>
    </v-col>
    <v-col cols="auto">
      <div class="mt-3 px-4 mx-2 border-b-2 border-urubrown"></div>
    </v-col>
    <v-col cols="auto"><div class="mt-1 diamond"></div></v-col>
    <v-col></v-col>
  </v-row>
</template>
<style scoped>
.diamond {
  width: 15px;
  height: 15px;
  background: #e19daa;
  transform: rotate(45deg);
}
</style>
