import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { CategoryEntity } from "."

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

  @ManyToOne(() => CategoryEntity, { eager: true, nullable: false })
  category!: CategoryEntity

  @Column({ name: 'createdAt' })
  createdAt!: Date

  @Column({ name: 'updatedAt' })
  updatedAt!: Date

}