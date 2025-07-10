import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_PopPoliticalStatus')
export class DimPopPoliticalStatus {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'StatusID' })
  statusId: number;

  @Column('varchar', {
    name: 'StatusName',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  statusName: string | null;

  @Column('double', {
    name: 'ProductionMod',
    nullable: true,
    default: () => 'NULL',
  })
  productionMod: number | null;

  @Column('double', {
    name: 'WealthMod',
    nullable: true,
    default: () => 'NULL',
  })
  wealthMod: number | null;

  @Column('integer', {
    name: 'SPRequired',
    nullable: true,
    default: () => 'NULL',
  })
  spRequired: number | null;

  @Column('integer', {
    name: 'NextStatusID',
    nullable: true,
    default: () => 'NULL',
  })
  nextStatusId: number | null;

  @Column('double', {
    name: 'OccupationForceMod',
    nullable: true,
    default: () => 'NULL',
  })
  occupationForceMod: number | null;

  @Column('double', {
    name: 'ProtectionRequired',
    nullable: true,
    default: () => 'NULL',
  })
  protectionRequired: number | null;

  @Column('double', {
    name: 'ServiceSector',
    nullable: true,
    default: () => 'NULL',
  })
  serviceSector: number | null;
}
