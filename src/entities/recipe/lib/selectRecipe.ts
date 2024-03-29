import { useRecipeStore } from "@/entities/recipe";
import { ref } from "vue";

export const selectRecipe = () => {
  const showModal = ref<boolean>(false);
  const recipeStore = useRecipeStore();

  const selectRecipeById = (id: string) => {
    showModal.value = !showModal.value;
    recipeStore.getCurrentRecipe(id);
  };

  return { showModal, selectRecipeById };
};
