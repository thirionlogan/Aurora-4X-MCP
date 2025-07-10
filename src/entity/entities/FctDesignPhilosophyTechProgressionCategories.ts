import { Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_DesignPhilosophyTechProgressionCategories')
export class FctDesignPhilosophyTechProgressionCategories {
  @PrimaryColumn('integer', { name: 'RaceID' })
  raceId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'TechProgressionCategoryID' })
  techProgressionCategoryId: number;
}
