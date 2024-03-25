import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from './entities/user.schema';
import { AbstractRepository } from 'src/common/database/abstract.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersRepository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UsersRepository.name);

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
