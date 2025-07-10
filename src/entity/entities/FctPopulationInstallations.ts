import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_PopulationInstallations')
export class FctPopulationInstallations {
  @PrimaryColumn('integer', {
    name: 'GameID',
  })
  gameId: number;

  @PrimaryColumn('integer', {
    name: 'PopID',
  })
  popId: number;

  @PrimaryColumn('integer', {
    name: 'PlanetaryInstallationID',
  })
  planetaryInstallationId: number;

  @Column('double', { name: 'Amount', nullable: true, default: () => '0' })
  amount: number | null;
}
