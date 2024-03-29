import { http } from "@/shared/api";
import { type TRecipe } from "@/shared/types";

export const fetchRecipes = async (): Promise<TRecipe[]> => {
  return (await http.get("/recipes")).data;
};

export const fetchRecipe = async (id: string): Promise<TRecipe> => {
  return (await http.get(`/recipes/${id}`)).data;
};
