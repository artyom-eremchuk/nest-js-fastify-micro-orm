import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityManager, EntityRepository } from '@mikro-orm/core';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly em: EntityManager,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findOne(id: number): Promise<User> {
    return this.userRepository.findOneOrFail(id);
  }

  async create(user: User): Promise<User> {
    const newUser = this.userRepository.create(user);
    await this.em.persistAndFlush(newUser);
    return newUser;
  }

  async update(id: number, user: User): Promise<User> {
    const existingUser = await this.userRepository.findOneOrFail(id);
    this.userRepository.assign(existingUser, user);
    await this.em.persistAndFlush(existingUser);
    return existingUser;
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.nativeDelete(id);
  }
}
