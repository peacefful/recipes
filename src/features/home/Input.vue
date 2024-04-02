<template>
  <Input color="info" v-model.trim="searchValue" placeholder="Введите название">
    <VaIcon name="search" :size="23" class="mr-2" color="secondary" />
  </Input>
</template>

<script setup lang="ts">
import { Input } from "@/shared/ui/input";

const searchValue = defineModel("searchValue");
</script>