import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ShipClassTemplate')
export class FctShipClassTemplate {
  @PrimaryColumn('integer', { name: 'ShipClassTemplateID' })
  shipClassTemplateId: number;

  @Column('text', { name: 'ShipClassTemplateName', nullable: true })
  shipClassTemplateName: string | null;

  @PrimaryColumn('integer', { name: 'HullID' })
  hullId: number;

  @Column('integer', {
    name: 'ArmourThickness',
    nullable: true,
    default: () => '1',
  })
  armourThickness: number | null;

  @Column('integer', { name: 'Collier', nullable: true, default: () => '0' })
  collier: number | null;

  @Column('integer', { name: 'FuelTanker', nullable: true, default: () => '0' })
  fuelTanker: number | null;

  @Column('integer', { name: 'SupplyShip', nullable: true, default: () => '0' })
  supplyShip: number | null;

  @Column('integer', {
    name: 'ConscriptOnly',
    nullable: true,
    default: () => '0',
  })
  conscriptOnly: number | null;

  @Column('integer', { name: 'NoArmour', nullable: true, default: () => '0' })
  noArmour: number | null;

  @Column('integer', { name: 'NoOfficers', nullable: true, default: () => '0' })
  noOfficers: number | null;

  @Column('double', {
    name: 'PlannedDeployment',
    nullable: true,
    default: () => '3',
  })
  plannedDeployment: number | null;

  @Column('integer', { name: 'SeniorCO', nullable: true, default: () => '0' })
  seniorCo: number | null;

  @Column('integer', {
    name: 'MinimumSupplies',
    nullable: true,
    default: () => '0',
  })
  minimumSupplies: number | null;

  @Column('integer', {
    name: 'MinimumFuel',
    nullable: true,
    default: () => '0',
  })
  minimumFuel: number | null;

  @Column('integer', {
    name: 'ResupplyPriority',
    nullable: true,
    default: () => '5',
  })
  resupplyPriority: number | null;

  @Column('integer', {
    name: 'RefuelPriority',
    nullable: true,
    default: () => '5',
  })
  refuelPriority: number | null;

  @Column('integer', {
    name: 'PDProtectionPriority',
    nullable: true,
    default: () => '5',
  })
  pdProtectionPriority: number | null;

  @Column('integer', {
    name: 'CommanderPriority',
    nullable: true,
    default: () => '0',
  })
  commanderPriority: number | null;

  @Column('integer', {
    name: 'MaintPriority',
    nullable: true,
    default: () => '0',
  })
  maintPriority: number | null;
}
