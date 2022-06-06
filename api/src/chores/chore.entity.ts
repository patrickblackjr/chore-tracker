import { IsOptional } from 'class-validator'
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

@Entity()
export class Chore {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  @IsOptional()
  description?: string | null

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
