import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_RaceTech')
export class FctRaceTech {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'TechID',
  })
  techId: number;

  @PrimaryColumn('integer', {
    name: 'RaceID',
  })
  raceId: number;

  @Column('boolean', {
    name: 'Obsolete',
    nullable: true,
    default: () => 'NULL',
  })
  obsolete: boolean | null;
}
