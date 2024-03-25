import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/common/database/database.module';
import { User, UserSchema } from './entities/user.entity';
import { UsersRepository } from './users.repository';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { HashingService } from 'src/common/hashing/hashing.service';
import { BcryptService } from 'src/common/hashing/bcrypt.service';

@Module({
  imports: [
    DatabaseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UsersResolver,
    UsersService,
    UsersRepository,
    {
      provide: HashingService,
      useClass: BcryptService,
    },
  ],
})
export class UsersModule {}
