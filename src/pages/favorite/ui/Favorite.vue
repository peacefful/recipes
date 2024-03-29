<template>
  <main>
    <div class="mt-5 flex flex-wrap gap-4 justify-center">
      <RecipeList 
        :recipes="recipeStore.favoriteRecipes" 
        @select-recipe="selectRecipeById" 
      />
    </div>
    <Modal
      :close-button="true"
      :hide-default-actions="true"
      :recipe="recipeStore.recipe"
      v-model="showModal" 
    />
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore, selectRecipe } from "@/entities/recipe";
import { RecipeList } from "@/widgest/recipe-list";
import { Modal } from "@/entities/recipe";

const recipeStore = useRecipeStore();
recipeStore.getFavoriteRecipes();

const { selectRecipeById, showModal } = selectRecipe()
</script>