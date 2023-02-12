<script setup lang="ts">
const baseAnimationElement = ref<HTMLSpanElement>(null!);
const baseAnimationObserver = ref<IntersectionObserver>(null!);
const baseAnimationIsShow = ref(false);

const baseAnimationIsShowDoObserve = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio == 0) return;
    baseAnimationIsShow.value = true;
    baseAnimationObserver.value.unobserve(entry.target);
  });
};
onMounted(() => {
  baseAnimationObserver.value = new IntersectionObserver(baseAnimationIsShowDoObserve, { threshold: 1 });
  baseAnimationObserver.value.observe(baseAnimationElement.value);
});

const props = defineProps({
  translateY: {
    type: Boolean,
    default: false,
    required: false,
  },
});

const _class = computed(() => {
  return {
    "opacity-0": !baseAnimationIsShow.value,
    "opacity-100": baseAnimationIsShow.value,
    "translate-y-0": props.translateY && baseAnimationIsShow.value,
    "translate-y-14": props.translateY && !baseAnimationIsShow.value,
  };
});
</script>

<template>
  <div ref="baseAnimationElement" class="transition duration-1000 ease-in-out" :class="_class">
    <slot />
  </div>
</template>
