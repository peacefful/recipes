<template>
  <VaModal
    v-model="showModal"
    @ok="$emit('recipe-action', recipe.id)"
    blur
  >
    <div class="flex justify-center items-center mt-2">
      <img :src="recipe.image" alt="" />
    </div>
    <h3 class="va-h3">
      {{ recipe.title }}
    </h3>
    <h2>Ингридиенты:</h2>
    <div class="my-2 flex gap-3">
      <div>
        <p>{{ recipe.ingredient_1 }}</p>
        <p>{{ recipe.ingredient_2 }}</p>
        <p>{{ recipe.ingredient_3 }}</p>
      </div>
      <div>
        <p>{{ recipe.ingredient_4 }}</p>
        <p>{{ recipe.ingredient_5 }}</p>
      </div>
    </div>
    <hr />
    <h2 class="mt-3">Приготовление:</h2>
    <p class="text-justify">
      {{ recipe.manual }}
    </p>
  </VaModal>
</template>

<script setup lang="ts">
import { type TRecipe } from "@/shared/types";

type TModalRecipe = {
  recipe: TRecipe;
};

defineProps<TModalRecipe>();

defineEmits(['recipe-action'])

const showModal = defineModel<boolean>("showModal");
</script>
