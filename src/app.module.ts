import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScootersModule } from './scooters/scooters.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '6214',
      database: 'test',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ScootersModule
  ]
})
export class AppModule {}
