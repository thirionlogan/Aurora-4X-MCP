import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_PopInstallationDemand')
export class FctPopInstallationDemand {
  @PrimaryColumn('integer', {
    name: 'PopulationID',
  })
  populationId: number;

  @PrimaryColumn('integer', {
    name: 'InstallationID',
  })
  installationId: number;

  @Column('double', { name: 'Amount', nullable: true, default: () => 'NULL' })
  amount: number | null;

  @Column('boolean', { name: 'Export', nullable: true, default: () => 'NULL' })
  export: boolean | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('boolean', {
    name: 'NonEssential',
    nullable: true,
    default: () => 'FALSE',
  })
  nonEssential: boolean | null;
}
