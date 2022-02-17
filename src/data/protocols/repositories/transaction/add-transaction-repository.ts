import { AddTransaction } from '@/domain/usecases'

export interface AddTransactionRepository {
  addTransaction: (params: AddTransactionRepository.Params) => Promise<AddTransactionRepository.Result>
}

export namespace AddTransactionRepository {
  export type Params = {
    value: number
    type: number
    date: Date
    category: { id: number }
  }
  export type Result = AddTransaction.Result
}
