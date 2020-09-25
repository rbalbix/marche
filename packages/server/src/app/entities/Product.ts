import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import { Category } from './Category';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    nullable: false
  })
  name: string;

  @Column({
    length: 50,
    nullable: false,
    default: 'unidade'
  })
  unity: string;

  @ManyToOne(() => Category, category => category.products, {
    onDelete: 'CASCADE'
  })
  category: Category;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
