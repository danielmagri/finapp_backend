import { Connection, createConnection, EntityManager, getConnection, getConnectionManager, getRepository, ObjectType, QueryRunner, Repository } from 'typeorm'
import { ConnectionNotFoundError, TransactionNotFoundError } from '@/infra/database/helpers/errors'

export class DbConnection {
  private static instance?: DbConnection
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

  async disconnect(): Promise<void> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    await getConnection().close()
    this.connection = undefined
  }

  async getTransaction<T>(runInTransaction: (entityManager: EntityManager) => Promise<T>): Promise<T> {
    return await this.connection.transaction<T>(runInTransaction)
  }

  getRepository<Entity>(entity: ObjectType<Entity>): Repository<Entity> {
    if (this.connection === undefined) throw new ConnectionNotFoundError()
    return getRepository(entity)
  }
}