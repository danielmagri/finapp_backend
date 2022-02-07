import { Category } from '@/domain/models'

export interface FindCategories {
    find: () => Promise<FindCategories.Result>
}

export namespace FindCategories {
    export type Result = Category.Model[]
}