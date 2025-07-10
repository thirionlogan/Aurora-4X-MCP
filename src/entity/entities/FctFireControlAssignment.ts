import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_FireControlAssignment')
export class FctFireControlAssignment {
  @PrimaryColumn('integer', { name: 'ShipID' })
  shipId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'FCTypeID' })
  fcTypeId: number;

  @Column('integer', { name: 'FCNum', nullable: true, default: () => 'NULL' })
  fcNum: number;

  @PrimaryColumn('integer', {
    name: 'TargetID',
  })
  targetId: number;

  @Column('integer', {
    name: 'TargetType',
    nullable: true,
    default: () => 'NULL',
  })
  targetType: number | null;

  @Column('boolean', { name: 'OpenFire', nullable: true, default: () => '0' })
  openFire: boolean | null;

  @Column('boolean', { name: 'NodeExpand', nullable: true, default: () => '1' })
  nodeExpand: boolean | null;

  @Column('integer', {
    name: 'PointDefenceMode',
    nullable: true,
    default: () => '0',
  })
  pointDefenceMode: number | null;

  @Column('integer', {
    name: 'PointDefenceRange',
    nullable: true,
    default: () => '0',
  })
  pointDefenceRange: number | null;

  @Column('boolean', {
    name: 'FiredThisPhase',
    nullable: true,
    default: () => '0',
  })
  firedThisPhase: boolean | null;

  @Column('integer', {
    name: 'PointDefencePriority',
    nullable: true,
    default: () => '3',
  })
  pointDefencePriority: number | null;

  @Column('integer', {
    name: 'PDFireConcentration',
    nullable: true,
    default: () => '3',
  })
  pdFireConcentration: number | null;

  @Column('double', {
    name: 'MinimumAMMRange',
    nullable: true,
    default: () => '0',
  })
  minimumAmmRange: number | null;
}
