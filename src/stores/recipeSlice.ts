import { StateCreator } from "zustand"
import { getCategories, getRecipes, getRecipesById } from "../services/RecipeService"
import type {Categories, searchFilter,Drinks, Drink} from "../types"

export type RecipesSliceType ={
    categories:Categories
    drinks: Drinks
    fetchCategories:()=>Promise<void>
    searchRecipes:(searchFilters:searchFilter)=>Promise<void>
    selectRecipe:(id:Drink['idDrink'])=>Promise<void>  // fetch categories from API  // Promise para esperar la respuesta del API
}
export const createRecipeSlice:StateCreator<RecipesSliceType> =(set) =>({
    categories: {
        drinks: []
    },
    drinks:{
        drinks:[]
    },
    fetchCategories:async()=>{
       const categories= await  getCategories()
       set({
          categories
       })
    },
    searchRecipes:async(filters)=>{
     const drinks= await getRecipes(filters) 
     set({
        drinks
     })
    },
    selectRecipe :async(id)=>{
     const selectRecipes= await getRecipesById(id)
     console.log(selectRecipes) 
    }    
})