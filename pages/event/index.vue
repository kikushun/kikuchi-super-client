<script setup lang="ts">
import { Event } from "~/types";
const eventList = ref<Event[]>([]);
const config = useRuntimeConfig();
const { data } = await useFetch<Event[]>("/events", { baseURL: config.public.baseUrl });
eventList.value = data.value ?? [];
const router = useRouter();
const goToEvent = (id: number) => {
  router.push(`/event/${id}`);
};
</script>
<template>
  <v-container :fluid="$device.isMobile" :class="{ 'px-8': $device.isDesktop, 'px-2': $device.isMobile }" class="mt-20 pt-10">
    <base-animation class="px-4">
      <base-goto />
      <h2 class="title text-20b pl-2 py-1">イベント</h2>
      <v-list class="mt-8">
        <v-list-item v-for="event in eventList" :key="event.id" v-ripple class="py-4 cursor-pointer event" @click="goToEvent(event.id)">
          <v-row no-gutters class="text-urubrown">
            <v-col :cols="$device.isDesktop ? 'auto' : '12'" class="text-18">{{ event.insertDateDisplay }}</v-col>
            <v-col :cols="$device.isDesktop ? 'auto' : '12'" :class="{ 'pl-4': $device.isDesktop }" class="pt-1 text-20b whitespace-nowrap text-ellipsis overflow-hidden">{{ event.title }}</v-col>
          </v-row>
          <div class="text-urubrown text-18 pt-1 whitespace-nowrap text-ellipsis overflow-hidden">{{ event.content }}</div>
        </v-list-item>
      </v-list>
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

.event:hover {
  background: #f5f5f5;
}
</style>
