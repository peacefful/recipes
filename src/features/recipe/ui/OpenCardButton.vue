<template>
  <Button theme="info" @click="$emit('select-recipe')">
    <slot />
  </Button>
</template>

<script setup lang="ts">
import { Button } from "@/shared/ui/button";

defineEmits(["select-recipe"]);
</script>
