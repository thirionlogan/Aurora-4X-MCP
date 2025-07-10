import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_WreckTech')
export class FctWreckTech {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'WreckID' })
  wreckId: number;

  @PrimaryColumn('integer', { name: 'TechID' })
  techId: number;

  @Column('integer', {
    name: 'Percentage',
    nullable: true,
    default: () => 'NULL',
  })
  percentage: number | null;
}
