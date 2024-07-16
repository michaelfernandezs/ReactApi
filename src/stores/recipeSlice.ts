import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import type {Categories, searchFilter} from "../types"

export type RecipesSliceType ={
    categories:Categories
    fetchCategories:()=>Promise<void>
    searchRecipes:(searchFilters:searchFilter)=>Promise<void>  // fetch categories from API  // Promise para esperar la respuesta del API
}
export const createRecipeSlice:StateCreator<RecipesSliceType> =(set) =>({
    categories: {
        drinks: []
    },
    fetchCategories:async()=>{
       const categories= await  getCategories()
       set({
          categories
       })
    },
    searchRecipes:async(filters)=>{
      console.log(filters)
    },
})