import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne
} from 'typeorm';

import { List } from './List';
import { Product } from './Product';

@Entity()
export class MarketList {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  listId!: string;

  @Column()
  productId!: string;

  @Column()
  quantity!: number;

  @Column({ default: false })
  isMarked: boolean;

  @ManyToOne(() => List, list => list.marketList)
  public list!: List;

  @ManyToOne(() => Product, product => product.marketList)
  public product!: Product;

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
