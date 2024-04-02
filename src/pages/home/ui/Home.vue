<template>
  <main>
    <div class="text-center">
      <Input color="info" v-model="searchValue" placeholder="Введите название">
        <VaIcon name="search" :size="23" class="mr-2" color="secondary" />
      </Input>
    </div>
    <div class="mt-5 flex flex-wrap gap-4 justify-center">
      <RecipeList
        :recipes="recipeStore.recipes"
        @select-recipe="selectRecipeById"
      />
    </div>
    <Modal
      @recipe-action="recipeStore.saveCurentRecipe"
      ok-text="Сохранить"
      cancel-text="Закрыть"
      :recipe="recipeStore.recipe"
      v-model="showModal"
    />
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore, Modal, selectRecipe } from "@/entities/recipe";
import { RecipeList } from "@/widgets/recipe-list";
import { useDebounce } from "@/shared/lib";
import { Input } from "@/shared/ui/input";
import { ref, watch } from "vue";

const searchValue = ref<string>("");
const debouncedValue = useDebounce(searchValue, 500);

const { showModal, selectRecipeById } = selectRecipe();

const recipeStore = useRecipeStore();

watch(debouncedValue, () => {
  recipeStore.getSearchResultRecipes(debouncedValue.value);
});
</script>
