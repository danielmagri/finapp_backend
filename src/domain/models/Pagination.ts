export namespace Pagination {
    export interface Request {
        page: number
        per_page: number
    }

    export interface Result<Data> {
        page: number
        per_page: number
        last_page: number
        total_itens: number
        data: Data[]
    }

}
