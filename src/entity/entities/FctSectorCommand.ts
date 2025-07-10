import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_SectorCommand')
export class FctSectorCommand {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'SectorCommandID',
  })
  sectorCommandId: number;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => '0',
  })
  populationId: number | null;

  @Column('varchar', {
    name: 'SectorName',
    nullable: true,
    length: 100,
    default: () => 'NULL',
  })
  sectorName: string | null;

  @Column('integer', { name: 'Colour', nullable: true, default: () => 'NULL' })
  colour: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;
}
