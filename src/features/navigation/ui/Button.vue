<template>
  <VaButton color="costum" @click="showSidebar = !showSidebar">
    <VaIcon :size="30" :name="showSidebar ? 'menu_open' : 'menu'" />
  </VaButton>
</template>

<script setup lang="ts">
import { inject } from "vue";

const showSidebar = inject("showSidebar") as boolean;
</script>
