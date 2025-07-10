import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_GroundUnitCapability')
export class DimGroundUnitCapability {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'CapabilityID',
  })
  capabilityId: number;

  @Column('text', { name: 'CapabilityName', nullable: true })
  capabilityName: string | null;

  @Column('integer', { name: 'TechSystemID', nullable: true })
  techSystemId: number | null;

  @Column('boolean', { name: 'InfantryOnly', nullable: true })
  infantryOnly: boolean | null;

  @Column('double', {
    name: 'CostMultiplier',
    nullable: true,
    default: () => '1',
  })
  costMultiplier: number | null;

  @Column('double', {
    name: 'HPEnhancement',
    nullable: true,
    default: () => '0',
  })
  hpEnhancement: number | null;
}
