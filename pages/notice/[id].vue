<script setup lang="ts">
import { Notice } from "~/types";
const config = useRuntimeConfig();
const { data: notice } = await useFetch<Notice>(`/notices/${useRoute().params.id}`, { baseURL: config.public.baseUrl });
</script>
<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto title="お知らせ一覧画面に戻る" path="/notice" />
      <h2 class="title text-20b pl-2 py-1">お知らせ</h2>
      <v-card class="mt-8 pa-4" outlined>
        <div class="text-urubrown text-20b pb-4">{{ notice?.title }}</div>
        <div class="whitespace-pre-line text-urubrown text-18">{{ notice?.message }}</div>
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
