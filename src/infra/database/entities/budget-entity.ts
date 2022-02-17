import { AfterUpdate, Check, Column, CreateDateColumn, Entity, Index, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { CategoryEntity, TransactionEntity } from "."

@Entity({ name: 'budgets' })
@Check(`DAY("date") = 1`)
export class BudgetEntity {
    @PrimaryColumn({ name: 'date' })
    date!: Date

    @Column({ name: 'budgetValue', type: "float", precision: 2, default: 0 })
    budgetValue!: number

    @Column({ name: 'spentValue', type: "float", precision: 2, default: 0 })
    spentValue!: number

    @ManyToOne(() => CategoryEntity, { eager: true, nullable: false, primary: true })
    category!: CategoryEntity

    @CreateDateColumn()
    createdAt!: Date

    @UpdateDateColumn()
    updatedAt!: Date

}