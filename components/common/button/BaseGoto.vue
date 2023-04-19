<script setup lang="ts">
import { mdiMenuLeft } from "@mdi/js";
interface Props {
  title: string;
  path: string;
}

const props = withDefaults(defineProps<Props>(), {
  title: "トップ画面に戻る",
  path: "/",
});
const router = useRouter();
const goToPage = () => {
  router.push(props.path);
};
</script>
<template>
  <v-btn variant="text" class="mb-10" @click="goToPage()">
    <v-icon class="text-urubrown">{{ mdiMenuLeft }}</v-icon>
    <span class="text-urubrown">{{ props.title }}</span>
  </v-btn>
</template>
