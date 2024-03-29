<template>
  <VaNavbar class="shadow-md">
    <template #left>
      <Button />
      <VaNavbarItem class="ml-2 text-3xl">
        Рецепты
      </VaNavbarItem>
    </template>
  </VaNavbar>
</template>

<script setup lang="ts">
import { Button } from "@/features/navigation";
</script>
