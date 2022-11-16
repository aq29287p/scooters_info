import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity()
export class Scooter{

    @PrimaryColumn()
    licensePlate: string;

    @Column()
    mileage: number;
}
