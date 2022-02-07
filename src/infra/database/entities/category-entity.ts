import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity({ name: 'categories' })
export class CategoryEntity {
    @PrimaryGeneratedColumn()
    id!: number

    @Column({ name: 'name' })
    name!: string

    @Column({ name: 'createdAt' })
    createdAt!: Date

    @Column({ name: 'updatedAt' })
    updatedAt!: Date

}