<template>
  <VaSidebarItemContent 
    @click="router.push(route)" 
    class="flex items-center"
  >
    <VaIcon :size="30" :name="icon" />
    <VaSidebarItemTitle class="ml-2 text-1xl">
      {{ title }}
    </VaSidebarItemTitle>
  </VaSidebarItemContent>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { type TButton } from "@/shared/types";

defineProps<TButton>();

const router = useRouter();
</script>
