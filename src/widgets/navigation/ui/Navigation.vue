<template>
  <VaNavbar class="shadow-md">
    <template #left>
      <Button theme="custom" @click="showSidebar = !showSidebar">
        <VaIcon :size="30" :name="showSidebar ? 'menu_open' : 'menu'" />
      </Button>
      <VaNavbarItem class="ml-2 text-3xl"> Рецепты </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup lang="ts">
import { Button } from "@/shared/ui/button";
import { inject } from "vue";

let showSidebar = inject("showSidebar") as boolean;
</script>
