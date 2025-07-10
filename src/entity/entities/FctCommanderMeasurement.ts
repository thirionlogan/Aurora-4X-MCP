import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_CommanderMeasurement')
export class FctCommanderMeasurement {
  @PrimaryColumn('integer', { name: 'CommanderID' })
  commanderId: number;

  @Column('integer', {
    name: 'MeasurementType',
    nullable: true,
    default: () => '0',
  })
  measurementType: number | null;

  @Column('double', { name: 'Amount', nullable: true, default: () => '0' })
  amount: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
