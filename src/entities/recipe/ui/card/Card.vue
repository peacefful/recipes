<template>
  <div
    class="flex flex-col justify-between w-80 h-[22rem] p-4 rounded-md border-solid border-1 border-black bg-white"
  >
    <div>
      <img :src="image" class="max-h-72 max-w-72 rounded-md" />
      <div class="py-3">
        {{ title }}
      </div>
    </div>
    <slot/>
  </div>
</template>

<script setup lang="ts">

interface IRecipeCard {
  title: string
  image: string
}

defineProps<IRecipeCard>();
</script>
