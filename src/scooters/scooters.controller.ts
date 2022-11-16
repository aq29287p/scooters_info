import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScootersService } from './scooters.service';
import { CreateScooterDto } from './dto/create-scooter.dto';
import { UpdateScooterDto } from './dto/update-scooter.dto';

@Controller('scooters')
export class ScootersController {
  constructor(private readonly scootersService: ScootersService) {}

  @Post()
  async create(@Body() createScooterDto: CreateScooterDto) {
    return await this.scootersService.create(createScooterDto);
  }

  @Get()
  async findAll() {
    return await this.scootersService.findAll();
  }

  @Get(':licensePlate')
  async findOne(@Param('licensePlate') licensePlate: string) {
    return await this.scootersService.findOne(licensePlate);
  }

  @Patch(':licensePlate')
  async update(@Param('licensePlate') licensePlate: string, @Body() updateScooterDto: UpdateScooterDto) {
    return await this.scootersService.update(licensePlate, updateScooterDto);
  }

  @Delete(':licensePlate')
  async remove(@Param('licensePlate') licensePlate: string) {
    return await this.scootersService.remove(licensePlate);
  }
}
