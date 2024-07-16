import axios from'axios'
import { categoriesAPIResponseSchema } from '../utils/recipes-schema'
export async function getCategories(){
    const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const {data}=await axios(url)
    console.log(data)
    const result=categoriesAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
}