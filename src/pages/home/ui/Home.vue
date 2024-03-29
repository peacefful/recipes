<template>
  <main>
    <div class="text-center">
      <Input
        color="info"
        v-model="searchValue"
        placeholder="Введите название"
      />
    </div>
    <div class="mt-5 flex flex-wrap gap-4 justify-center">
      <RecipeList
        :recipes="recipeStore.recipes"
        @select-recipe="selectRecipeById"
      />
    </div>
    <Modal
      :hide-default-actions="checkRecipeInFavorite(recipeStore.recipe.id)"
      :close-button="checkRecipeInFavorite(recipeStore.recipe.id)"
      :recipe="recipeStore.recipe"
      v-model="showModal"
    />
  </main>
</template>

<script setup lang="ts">
import { Input } from "@/features/home";
import { RecipeList } from "@/widgest/recipe-list";
import { useDebounce } from "@/shared/lib";
import { ref, watch } from "vue";
import {
  useRecipeStore,
  Modal,
  checkRecipeInFavorite,
  selectRecipe,
} from "@/entities/recipe";

const searchValue = ref<string>("");
const debouncedValue = useDebounce(searchValue, 500);

const { showModal, selectRecipeById } = selectRecipe();

const recipeStore = useRecipeStore();

watch(debouncedValue, () => {
  recipeStore.getSearchResultRecipes(debouncedValue.value);
});
</script>
