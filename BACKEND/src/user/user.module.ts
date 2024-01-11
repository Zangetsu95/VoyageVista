import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UsersService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UsersService],
})
export class UserModule {}
