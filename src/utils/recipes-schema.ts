
import{z}from'zod'
export const categoriesAPIResponseSchema=z.object({
    drinks:z.array(
        z.object({
        strCategory:z.string()
       
    }))
})
export const searchFilterSchema=z.object({

    ingridient:z.string(),
    category:z.string()
})