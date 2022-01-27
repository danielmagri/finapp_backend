import { Connection, createConnection, getConnection, getConnectionManager, getRepository, ObjectType, QueryRunner, Repository } from 'typeorm'
import { ConnectionNotFoundError } from '@/infra/database/helpers/errors'

export class DbConnection {
    private static instance?: DbConnection
    private query?: QueryRunner
    private connection?: Connection

    private constructor() { }

    static getInstance(): DbConnection {
        if (DbConnection.instance === undefined) DbConnection.instance = new DbConnection()
        return DbConnection.instance
    }

    async connect(): Promise<void> {
        this.connection = getConnectionManager().has('default')
            ? getConnection()
            : await createConnection()
    }

    getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
        if (this.connection === undefined) throw new ConnectionNotFoundError()
        if (this.query !== undefined) return this.query.manager.getRepository(entity)
        return getRepository(entity)
    }
}