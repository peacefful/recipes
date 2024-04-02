<template>
  <div v-for="recipe in recipes" :key="recipe.id">
    <Card class="mt-1" :image="recipe.image" :title="recipe.title">
      <OpenCardButton @click="$emit('select-recipe', recipe.id)">
        Открыть
      </OpenCardButton>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from "@/entities/recipe";
import { OpenCardButton } from "@/features/recipe";
import { type TRecipe } from "@/shared/types";

interface TRecipeList {
  recipes: TRecipe[];
}

defineProps<TRecipeList>();

defineEmits(["select-recipe"]);
</script>
