import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ResearchQueue')
export class FctResearchQueue {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'PopulationID' })
  populationId: number;

  @PrimaryColumn('integer', { name: 'TechSystemID' })
  techSystemId: number;

  @PrimaryColumn('integer', { name: 'CurrentProjectID' })
  currentProjectId: number;

  @Column('integer', {
    name: 'ResearchOrder',
    nullable: true,
    default: () => 'NULL',
  })
  researchOrder: number | null;
}
