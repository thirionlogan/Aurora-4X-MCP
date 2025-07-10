import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_MineralDeposit')
export class FctMineralDeposit {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'MaterialID' })
  materialId: number;

  @PrimaryColumn('integer', { name: 'SystemID' })
  systemId: number;

  @PrimaryColumn('integer', { name: 'SystemBodyID' })
  systemBodyId: number;

  @Column('double', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;

  @Column('double', {
    name: 'Accessibility',
    nullable: true,
    default: () => 'NULL',
  })
  accessibility: number | null;

  @Column('double', {
    name: 'HalfOriginalAmount',
    nullable: true,
    default: () => 'NULL',
  })
  halfOriginalAmount: number | null;

  @Column('double', {
    name: 'OriginalAcc',
    nullable: true,
    default: () => 'NULL',
  })
  originalAcc: number | null;
}
