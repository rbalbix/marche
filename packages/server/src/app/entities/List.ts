import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';

import { MarketList } from './MarketList';

@Entity()
export class List {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 50,
    nullable: false
  })
  name: string;

  @Column({
    default: 0
  })
  productQuantity: number;

  @OneToMany(() => MarketList, marketList => marketList.list)
  public marketList!: MarketList[];

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
