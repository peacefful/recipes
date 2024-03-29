<template>
  <VaButton @click="$emit('click')" class="mt-2" color="info">
    Открыть
  </VaButton>
</template>

<script setup lang="ts">
defineEmits(["click"]);
</script>