import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

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

  @CreateDateColumn()
  public createdAt: Date;

  @UpdateDateColumn()
  public updatedAt: Date;
}
