import { parseRecipeData } from "@/entities/recipe";

export const checkRecipeInFavorite = (id: string) => {
  const ids: string[] = parseRecipeData();

  if (ids.includes(id)) {
    return true;
  }
  return false;
};