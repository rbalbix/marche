import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany
} from 'typeorm';

import { Category } from './Category';
import { MarketList } from './MarketList';

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

  @OneToMany(() => MarketList, marketList => marketList.product)
  public marketList!: MarketList[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
