import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AetherGates')
export class FctAetherGates {
  @Column('integer', { name: 'SystemID', nullable: true, default: () => '0' })
  systemId: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('double', {
    name: 'CreationTime',
    nullable: true,
    default: () => '0',
  })
  creationTime: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => '0' })
  gameId: number | null;

  @PrimaryGeneratedColumn({ type: 'integer', name: 'AetherGateID' })
  aetherGateId: number;

  @Column('double', {
    name: 'CooldownTime',
    nullable: true,
    default: () => '0',
  })
  cooldownTime: number | null;
}
