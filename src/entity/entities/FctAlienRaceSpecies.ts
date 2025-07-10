import { PrimaryColumn, Entity } from 'typeorm';

@Entity('FCT_AlienRaceSpecies')
export class FctAlienRaceSpecies {
  @PrimaryColumn('integer', { name: 'AlienRaceID' })
  alienRaceId: number;

  @PrimaryColumn('integer', { name: 'SpeciesID' })
  speciesId: number;

  @PrimaryColumn('integer', { name: 'DetectRaceID' })
  detectRaceId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
