import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_GroundUnitArmour')
export class DimGroundUnitArmour {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TechSystemID' })
  techSystemId: number;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('double', {
    name: 'ArmourStrength',
    nullable: true,
    default: () => '0',
  })
  armourStrength: number | null;

  @Column('integer', {
    name: 'BaseUnitType',
    nullable: true,
    default: () => '0',
  })
  baseUnitType: number | null;

  @Column('integer', {
    name: 'ArmourTypeID',
    nullable: true,
    default: () => '0',
  })
  armourTypeId: number | null;
}
