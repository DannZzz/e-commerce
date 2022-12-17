import {
  Entity,
  OneToOne,
  JoinColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm'

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  username: string

  @Column()
  password: string

  @Column()
  avatar: string

  @CreateDateColumn()
  createdAt: string

  @UpdateDateColumn()
  updtedAt: string
}
