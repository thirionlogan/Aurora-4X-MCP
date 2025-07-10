import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_RuinRace')
export class FctRuinRace {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'RuinRaceID',
  })
  ruinRaceId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('text', { name: 'Title', nullable: true, default: () => 'NULL' })
  title: string | null;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('text', { name: 'RacePic', nullable: true, default: () => 'NULL' })
  racePic: string | null;

  @Column('text', { name: 'FlagPic', nullable: true, default: () => 'NULL' })
  flagPic: string | null;

  @Column('integer', { name: 'Level', nullable: true, default: () => 'NULL' })
  level: number | null;
}
