import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_KnownSpecies')
export class FctKnownSpecies {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'SpeciesID' })
  speciesId: number;

  @PrimaryColumn('integer', { name: 'ViewRaceID' })
  viewRaceId: number;

  @Column('integer', { name: 'Status', nullable: true, default: () => '0' })
  status: number | null;
}
