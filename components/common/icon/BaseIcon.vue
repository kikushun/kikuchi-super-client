<template>
  <span class="nuxt-icon" :class="{ 'nuxt-icon--fill': !filled }" v-html="icon" />
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  filled: {
    type: Boolean,
    default: false,
    required: false,
  },
  color: {
    type: String,
    default: null,
    required: false,
  },
});
const icon = ref({});
try {
  const iconsImport = import.meta.glob("assets/icons/**/**.svg", { as: "raw", eager: false });
  const rawIcon = await iconsImport[`/assets/icons/${props.name}.svg`]();
  icon.value = rawIcon;
} catch {
  console.error(`[nuxt-icons] Icon '${props.name}' doesn't exist in 'assets/icons'`);
}
</script>

<style>
.nuxt-icon {
  color: v-bind('props.color ?? "currentColor"');
}
.nuxt-icon svg {
  width: 100%;
  height: 100%;
  vertical-align: middle;
}
.nuxt-icon.nuxt-icon--fill,
.nuxt-icon.nuxt-icon--fill * {
  fill: currentColor !important;
}
</style>
