import { Injectable } from '@nestjs/common';
import { HashingService } from 'src/common/hashing/hashing.service';
import { CreateUserInput } from './dtos/create-user.input';
import { UpdateUserInput } from './dtos/update-user.input';
import { User } from './entities/user.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly hashingService: HashingService,
  ) {}

  public async create(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await this.hashingService.hash(
      createUserInput.password,
    );

    return this.usersRepository.create({
      ...createUserInput,
      password: hashedPassword,
    });
  }

  public async findAll(): Promise<User[]> {
    return this.usersRepository.find({});
  }

  public async findOne(id: string): Promise<User> {
    return this.usersRepository.findOne({ _id: id });
  }

  public async update(
    id: string,
    updateUserInput: UpdateUserInput,
  ): Promise<User> {
    const hashedPassword = await this.hashingService.hash(
      updateUserInput.password,
    );

    return this.usersRepository.findOneAndUpdate(
      { _id: id },
      {
        $set: {
          ...updateUserInput,
          password: hashedPassword,
        },
      },
    );
  }

  public async remove(id: string): Promise<User> {
    return this.usersRepository.findOneAndDelete({ _id: id });
  }
}
