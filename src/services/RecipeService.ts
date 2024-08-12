import axios from'axios'
import { categoriesAPIResponseSchema,DrinksAPIResponse, RecipeAPIResponseSchema } from '../utils/recipes-schema'
import { searchFilter } from '../types'
export async function getCategories(){
    const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data}=await axios(url)
    console.log(data)
    const result=categoriesAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
        
    }
}

export async function getRecipes(filters:searchFilter){
    const url=`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.
        ingredient}`
    const {data}=await axios(url)
    const result=DrinksAPIResponse.safeParse(data)
   console.log(result)
   if(result.success){
    return result.data
   }
    
    
}

export async function getRecipesById(id:Drink['idDrink']){
    const   url='https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}'
    const {data}=await axios(url)
    const result=RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success){
   return result.data   
    }
}