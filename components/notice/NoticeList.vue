<script setup lang="ts">
class Notice {
  id: number;
  title: string;
  message: string;
  constructor(id: number, title: string, message: string) {
    this.id = id;
    this.title = title;
    this.message = message;
  }
}
const noticeList = ref<Notice[]>([]);

const { data } = await useFetch("/notices");
console.log(data);
</script>
<template>
  <div>aaa</div>
</template>
