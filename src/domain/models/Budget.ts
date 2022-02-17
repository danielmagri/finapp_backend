import { Category } from ".";

export namespace Budget {
    export interface Model {
        date: Date
        budgetValue: number
        spentValue: number
        remainingValue: number
        category: Category.Model
        createdAt: Date
        updatedAt: Date
    }

}
