import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipComponentTemplate')
export class FctShipComponentTemplate {
  @Column('integer', { name: 'BGTech1', nullable: true, default: () => '0' })
  bgTech1: number | null;

  @Column('integer', { name: 'BGTech2', nullable: true, default: () => '0' })
  bgTech2: number | null;

  @Column('integer', { name: 'BGTech3', nullable: true, default: () => '0' })
  bgTech3: number | null;

  @Column('integer', { name: 'BGTech4', nullable: true, default: () => '0' })
  bgTech4: number | null;

  @Column('integer', { name: 'BGTech6', nullable: true, default: () => '0' })
  bgTech6: number | null;

  @Column('integer', { name: 'BGTech5', nullable: true, default: () => '0' })
  bgTech5: number | null;

  @Column('integer', {
    name: 'ComponentTypeID',
    nullable: true,
    default: () => '0',
  })
  componentTypeId: number | null;

  @PrimaryColumn('integer', {
    name: 'ShipComponentTemplateID',
  })
  shipComponentTemplateId: number;

  @Column('integer', { name: 'BGTech7', nullable: true, default: () => '0' })
  bgTech7: number | null;

  @Column('integer', { name: 'Resolution', nullable: true, default: () => '0' })
  resolution: number | null;

  @Column('integer', {
    name: 'NumberOfShots',
    nullable: true,
    default: () => '0',
  })
  numberOfShots: number | null;

  @Column('integer', { name: 'ExtraHTK', nullable: true, default: () => '0' })
  extraHtk: number | null;

  @Column('double', {
    name: 'ComponentSize',
    nullable: true,
    default: () => '0',
  })
  componentSize: number | null;

  @Column('double', {
    name: 'EnginePowerMod',
    nullable: true,
    default: () => '1',
  })
  enginePowerMod: number | null;

  @Column('text', { name: 'ComponentName', nullable: true })
  componentName: string | null;

  @Column('integer', {
    name: 'TurretWeaponTemplateID',
    nullable: true,
    default: () => '0',
  })
  turretWeaponTemplateId: number | null;

  @Column('integer', {
    name: 'TrackingSpeed',
    nullable: true,
    default: () => '0',
  })
  trackingSpeed: number | null;

  @Column('double', {
    name: 'ComponentValue',
    nullable: true,
    default: () => '0',
  })
  componentValue: number | null;
}
