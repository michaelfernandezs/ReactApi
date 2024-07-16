import{z} from 'zod'
import { categoriesAPIResponseSchema, searchFilterSchema } from '../utils/recipes-schema'

export type Categories=z.infer<typeof  categoriesAPIResponseSchema>

export type searchFilter=z.infer<typeof searchFilterSchema>