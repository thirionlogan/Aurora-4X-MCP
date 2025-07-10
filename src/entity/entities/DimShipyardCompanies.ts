import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_ShipyardCompanies')
export class DimShipyardCompanies {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'NameID' })
  nameId: number;

  @Column('varchar', {
    name: 'Suffix',
    nullable: true,
    length: 150,
    default: () => 'NULL',
  })
  suffix: string | null;
}
