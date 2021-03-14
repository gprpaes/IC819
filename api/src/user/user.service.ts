import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import User from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  private async create(dto: CreateUserDto): Promise<User> {
    let user = new User(
      dto.name,
      dto.cpf,
      dto.address,
      dto.email,
      dto.phone,
      dto.birthday,
      dto.username,
      dto.isSuperUser,
      dto.parentUser,
    );

    return await this.userRepository.save(user);
  }

  private async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  private async findOne(id: string): Promise<User[]> {
    return await this.userRepository.find({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
