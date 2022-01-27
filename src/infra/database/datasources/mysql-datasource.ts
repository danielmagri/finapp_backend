import { DbConnection } from '@/infra/database/helpers'
import { ObjectType, Repository } from 'typeorm'

export class MySqlDatasource {
    constructor(private readonly connection: DbConnection = DbConnection.getInstance()) { }

    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
        return this.connection.getRepository(entity)
    }
}
