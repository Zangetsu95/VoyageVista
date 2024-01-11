import { IsEmail, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' }) // Spécifiez le nom de la table ici
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  firstname: string;

  @Column({ type: 'varchar' })
  @IsNotEmpty()
  lastname: string;

  @Column({ type: 'varchar', unique: true })
  @IsEmail()
  email: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ type: 'varchar' })
  role: string;
}
