import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CategoryEntity } from "."

@Entity({ name: 'budgets' })
export class BudgetEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'budgetValue', type: "float", precision: 2 })
    budgetValue!: number

    @Column({ name: 'month' })
    month!: number

    @Column({ name: 'year' })
    year!: number

    @ManyToOne(() => CategoryEntity, { eager: true, nullable: false })
    category!: CategoryEntity

    @Column({ name: 'createdAt' })
    createdAt!: Date

    @Column({ name: 'updatedAt' })
    updatedAt!: Date
}