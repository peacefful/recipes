import { defineStore } from "pinia";
import { ApiRecipe, searchRecipe, parseRecipeData } from "@/entities/recipe";
import { type TRecipe } from "@/shared/types";

export const useRecipeStore = defineStore("recipeStore", {
  state: () => {
    return {
      recipe: {} as TRecipe,
      recipes: [] as TRecipe[],
      favoriteRecipes: [] as TRecipe[],
    };
  },
  actions: {
    getSearchResultRecipes(value: string) {
      if (value.trim()) {
        ApiRecipe.fetchRecipes().then((res) => {
          this.recipes = res.filter((recipe) => {
            return searchRecipe({ value, recipe });
          });
        });
      }
      this.recipes = [] as TRecipe[];
    },
    getCurrentRecipe(id: string) {
      ApiRecipe.fetchRecipe(id).then((res) => {
        this.recipe = res;
      });
    },
    saveCurentRecipe(id: string) {
      localStorage.setItem(`${id}`, id);
    },
    getFavoriteRecipes() {
      const ids = parseRecipeData();

      this.favoriteRecipes = [] as TRecipe[];

      for (const id of ids) {
        ApiRecipe.fetchRecipe(id).then((recipe) => {
          this.favoriteRecipes.push(recipe);
        });
      }
    },
    deleleFavoriteRecipe(recipeId: string) {
      localStorage.removeItem(`${recipeId}`);
    },
  },
});
