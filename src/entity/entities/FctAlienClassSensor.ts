import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AlienClassSensor')
export class FctAlienClassSensor {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'AlienClassID' })
  alienClassId: number;

  @Column('integer', {
    name: 'AlienSensorID',
    nullable: true,
    default: () => '0',
  })
  alienSensorId: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;
}
