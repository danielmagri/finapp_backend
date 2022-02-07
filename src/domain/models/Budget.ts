import { Category } from ".";

export namespace Budget {
    export interface Model {
        id: number
        budgetValue: number
        month: number
        year: number
        category: Category.Model
        createdAt: Date
        updatedAt: Date
    }

}
