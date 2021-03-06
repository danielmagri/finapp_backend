import { Category } from '@/domain/models'

export interface AddCategory {
    add: (params: AddCategory.Params) => Promise<AddCategory.Result>
}

export namespace AddCategory {
    export type Params = {
        name: string
    }

    export type Result = Category.Model
}