<template>
  <VaSidebar 
    class="h-screen" 
    color="custom" 
    v-model="showSidebar"
  >
    <VaSidebarItem 
      v-for="(navigation, index) in navigations" 
      :key="index"
    >
      <Item
        :title="navigation.title"
        :route="navigation.route"
        :icon="navigation.icon"
      />
    </VaSidebarItem>
  </VaSidebar>
</template>

<script setup lang="ts">
import { inject, reactive } from "vue";
import { Item } from "@/features/sidebar";
import { type TButton } from "@/shared/types";

const showSidebar: boolean = inject("showSidebar") as boolean;

const navigations: TButton[] = reactive([
  { title: "Главная", route: "/", icon: "home" },
  { title: "Избранное", route: "/favorite", icon: "star" },
]);
</script>
