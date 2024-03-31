<template>
  <main>
    <div
      v-if="isNotEmptyFavoriteRecipes"
      class="mt-5 flex flex-wrap gap-4 justify-center"
    >
      <RecipeList
        :recipes="recipeStore.favoriteRecipes"
        @select-recipe="selectRecipeById"
      />
    </div>
    <div v-else class="text-center">Избранных рецептов пока нет</div>
    <Modal
      ok-text="Удалить"
      cancel-text="Закрыть"
      v-model="showModal"
      @recipe-action="recipeStore.deleleFavoriteRecipe"
      :recipe="recipeStore.recipe"
    />
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore, selectRecipe } from "@/entities/recipe";
import { RecipeList } from "@/widgest/recipe-list";
import { Modal } from "@/entities/recipe";
import { computed } from "vue";

const recipeStore = useRecipeStore();
recipeStore.getFavoriteRecipes();

const isNotEmptyFavoriteRecipes = computed(() => {
  return recipeStore?.favoriteRecipes.length;
});

const { selectRecipeById, showModal } = selectRecipe();
</script>
