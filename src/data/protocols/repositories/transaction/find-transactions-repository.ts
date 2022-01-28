import { FindTransactions } from '@/domain/usecases'

export interface FindTransactionsRepository {
  findTransaction: () => Promise<FindTransactionsRepository.Result>
}

export namespace FindTransactionsRepository {
  export type Result = FindTransactions.Result
}
