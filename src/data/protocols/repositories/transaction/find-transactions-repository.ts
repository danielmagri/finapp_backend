import { FindTransactions } from '@/domain/usecases'

export interface FindTransactionsRepository {
  findTransaction: (params: FindTransactionsRepository.Params) => Promise<FindTransactionsRepository.Result>
}

export namespace FindTransactionsRepository {
  export type Params = FindTransactions.Params
  
  export type Result = FindTransactions.Result
}
