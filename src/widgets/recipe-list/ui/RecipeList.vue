<template>
  <div v-for="recipe in recipes" :key="recipe.id">
    <Card class="mt-1" :image="recipe.image" :title="recipe.title">
      <Button theme="info" @click="$emit('select-recipe', recipe.id)">
        Открыть
      </Button>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { Card } from "@/entities/recipe";
import { Button } from "@/shared/ui/button";
import { type TRecipe } from "@/shared/types";

interface TRecipeList {
  recipes: TRecipe[];
}

defineProps<TRecipeList>();

defineEmits(["select-recipe"]);
</script>
