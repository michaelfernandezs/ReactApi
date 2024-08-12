import{z} from 'zod'
import { categoriesAPIResponseSchema, DrinksAPIResponse, searchFilterSchema } from '../utils/recipes-schema'

export type Categories=z.infer<typeof  categoriesAPIResponseSchema>

export type searchFilter=z.infer<typeof searchFilterSchema>

export type Drinks=z.infer<typeof DrinksAPIResponse>

export type Drink=z.infer<typeof DrinksAPIResponse>