import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'transactions' })
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'value', type: "float", precision: 2 })
  value!: number

  @Column({ name: 'type' })
  type!: number

  @Column({ name: 'date' })
  date!: Date

  @Column({ name: 'createdAt' })
  createdAt!: Date

  @Column({ name: 'updatedAt' })
  updatedAt!: Date

}