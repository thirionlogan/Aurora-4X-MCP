import { PrimaryColumn, Entity } from 'typeorm';

@Entity('FCT_AlienClassTech')
export class FctAlienClassTech {
  @PrimaryColumn('integer', { name: 'AlienClassID' })
  alienClassId: number;

  @PrimaryColumn('integer', { name: 'TechID' })
  techId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
