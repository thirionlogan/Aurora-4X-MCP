import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_ResearchProject')
export class FctResearchProject {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'ProjectID',
  })
  projectId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', { name: 'TechID', nullable: true, default: () => 'NULL' })
  techId: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', {
    name: 'PopulationID',
    nullable: true,
    default: () => 'NULL',
  })
  populationId: number | null;

  @Column('integer', {
    name: 'Facilities',
    nullable: true,
    default: () => 'NULL',
  })
  facilities: number | null;

  @Column('integer', {
    name: 'ResSpecID',
    nullable: true,
    default: () => 'NULL',
  })
  resSpecId: number | null;

  @Column('double', {
    name: 'ResearchPointsRequired',
    nullable: true,
    default: () => 'NULL',
  })
  researchPointsRequired: number | null;

  @Column('boolean', { name: 'Pause', nullable: true, default: () => 'NULL' })
  pause: boolean | null;

  @Column('boolean', {
    name: 'AssignNew',
    nullable: true,
    default: () => 'FALSE',
  })
  assignNew: boolean | null;
}
