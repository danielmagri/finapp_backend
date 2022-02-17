import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { BudgetEntity, CategoryEntity } from "."

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

  @CreateDateColumn()
  createdAt!: Date

  @UpdateDateColumn()
  updatedAt!: Date

}