import { AddTransaction } from '@/domain/usecases'

export interface AddTransactionRepository {
    addTransaction: (params: AddTransactionRepository.Params) => Promise<AddTransactionRepository.Result>
}

export namespace AddTransactionRepository {
    export type Params = {
      value: string
    }
    export type Result = AddTransaction.Result
  }
  