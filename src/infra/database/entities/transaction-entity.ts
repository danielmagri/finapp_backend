import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'transaction' })
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'value' })
  value!: string
}