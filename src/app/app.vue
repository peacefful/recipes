<template>
  <VaLayout :left="{ absolute: true }">
    <template #top>
      <Navigation />
    </template>
    <template #left>
      <Sidebar />
    </template>
    <template #content>
      <div class="px-7 text-xl mt-5">
        <router-view></router-view>
      </div>
    </template>
  </VaLayout>
</template>

<script setup lang="ts">
import { ref, provide } from "vue";
import { Navigation } from "@/widgest/navigation";
import { Sidebar } from "@/widgest/sidebar";

const showSidebar = ref<boolean>(false);

provide("showSidebar", showSidebar);
</script>
