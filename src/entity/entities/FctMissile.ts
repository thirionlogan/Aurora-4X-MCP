import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Missile')
export class FctMissile {
  @Column('integer', {
    name: 'MissileNumber',
    nullable: true,
    default: () => '0',
  })
  missileNumber: number | null;

  @Column('integer', {
    name: 'RemainingDecoys',
    nullable: true,
    default: () => '0',
  })
  remainingDecoys: number | null;

  @PrimaryColumn('integer', {
    name: 'SalvoID',
  })
  salvoId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;
}
