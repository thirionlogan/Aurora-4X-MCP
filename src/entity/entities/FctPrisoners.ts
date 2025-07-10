import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Prisoners')
export class FctPrisoners {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'PopulationID',
  })
  populationId: number;

  @PrimaryColumn('integer', {
    name: 'PrisonerRaceID',
  })
  prisonerRaceId: number;

  @PrimaryColumn('integer', {
    name: 'PrisonerSpeciesID',
  })
  prisonerSpeciesId: number;

  @Column('integer', {
    name: 'NumPrisoners',
    nullable: true,
    default: () => 'NULL',
  })
  numPrisoners: number | null;
}
