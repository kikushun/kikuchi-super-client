<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto />
      <h2 class="title text-20b pl-2 py-1">お問い合わせ</h2>
      <v-card class="mt-8 pa-4 h-100" outlined>
        <v-text-field label="お名前"></v-text-field>
        <v-text-field label="メールアドレス"></v-text-field>
        <v-text-field label="電話番号"></v-text-field>
        <v-textarea label="内容"></v-textarea>
      </v-card>
    </base-animation>
  </v-container>
</template>
<style scoped>
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
</style>
