import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Ranks')
export class FctRanks {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'RankID' })
  rankId: number;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @Column('text', { name: 'RankName', nullable: true, default: () => 'NULL' })
  rankName: string | null;

  @Column('integer', { name: 'Priority', nullable: true, default: () => '0' })
  priority: number | null;

  @Column('integer', { name: 'RankType', nullable: true, default: () => '0' })
  rankType: number | null;

  @Column('text', { name: 'RankAbbrev', nullable: true, default: () => 'NULL' })
  rankAbbrev: string | null;

  @Column('integer', { name: 'GameID', nullable: true })
  gameId: number | null;
}
