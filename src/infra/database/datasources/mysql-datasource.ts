import { DbConnection } from '@/infra/database/helpers'
import { EntityManager, ObjectType, Repository } from 'typeorm'

export class MySqlDatasource {
    constructor(private readonly connection: DbConnection = DbConnection.getInstance()) { }

    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
        return this.connection.getRepository(entity)
    }

    async getTransaction<T>(runInTransaction: (entityManager: EntityManager) => Promise<T>): Promise<T> {
        return await this.connection.getTransaction<T>(runInTransaction)
    }
}
