import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AcidAttack')
export class FctAcidAttack {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TargetShipID' })
  targetShipId: number;

  @Column('integer', {
    name: 'ArmourColumn',
    nullable: true,
    default: () => '0',
  })
  armourColumn: number | null;

  @Column('integer', {
    name: 'PointOfDamageTime',
    nullable: true,
    default: () => '0',
  })
  pointOfDamageTime: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @Column('integer', {
    name: 'RemainingDamage',
    nullable: true,
    default: () => '0',
  })
  remainingDamage: number | null;

  @Column('double', {
    name: 'LastDamageTime',
    nullable: true,
    default: () => '0',
  })
  lastDamageTime: number | null;
}
