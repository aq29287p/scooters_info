import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scooter } from './entities/scooter.entity';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';

@Injectable()
export class ScootersService {
  constructor(
    @InjectRepository(Scooter) private scooterRepository: Repository<Scooter>
  ) {}

  async create(createScooterDto: CreateScooterDto) {
    return await this.scooterRepository.save(createScooterDto);
  }

  async findAll() {
    return await this.scooterRepository.find();
  }

  async findOne(licensePlate: string) {
    return await this.scooterRepository.find({ where: { licensePlate: licensePlate } });
  }
  
  async update(licensePlate: string, updateScooterDto: UpdateScooterDto) {
    return await this.scooterRepository.update(licensePlate, updateScooterDto);
  }

  async remove(licensePlate: string) {
    return await this.scooterRepository.delete(licensePlate);
  }
}
