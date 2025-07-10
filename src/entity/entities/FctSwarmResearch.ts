import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_SwarmResearch')
export class FctSwarmResearch {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('integer', { name: 'ResearchPoints', nullable: true })
  researchPoints: number | null;

  @PrimaryColumn('integer', { name: 'TechSystemID' })
  techSystemId: number;
}
