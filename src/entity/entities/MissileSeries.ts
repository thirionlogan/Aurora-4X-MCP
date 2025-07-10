import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('MissileSeries')
export class MissileSeries {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'SeriesID' })
  seriesId: number;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number;

  @Column('varchar', {
    name: 'SeriesName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  seriesName: string | null;
}
