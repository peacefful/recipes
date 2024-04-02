<template>
  <VaButton :color="theme" @click="$emit('click')">
    <slot />
  </VaButton>
</template>

<script setup lang="ts">
type TButton = {
  theme: string;
};

defineProps<TButton>();

defineEmits(["click"]);
</script>
