import { type TRecipe } from "@/shared/types";

interface TSearchRecipe {
  value: string;
  recipe: TRecipe;
}

export const searchRecipe = (data: TSearchRecipe): TRecipe | undefined => {
  const searchTerm = data.value.toLowerCase();
  const recipeTitle = data.recipe.title.toLowerCase();

  if (recipeTitle.includes(searchTerm)) {
    return data.recipe;
  }

  const pluralizedTerm = searchTerm.endsWith("ы")
    ? searchTerm.slice(0, -1)
    : searchTerm + "ы";

  if (recipeTitle.includes(pluralizedTerm)) {
    return data.recipe;
  }

  return undefined;
};
