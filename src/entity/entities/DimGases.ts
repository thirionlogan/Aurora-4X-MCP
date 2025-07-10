import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_Gases')
export class DimGases {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'GasID' })
  gasId: number;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;

  @Column('text', { name: 'Symbol', nullable: true, default: () => 'NULL' })
  symbol: string | null;

  @Column('integer', { name: 'Weight', nullable: true, default: () => 'NULL' })
  weight: number | null;

  @Column('integer', {
    name: 'BoilingPoint',
    nullable: true,
    default: () => 'NULL',
  })
  boilingPoint: number | null;

  @Column('numeric', { name: 'GHGas', nullable: true, default: () => 'NULL' })
  ghGas: number | null;

  @Column('numeric', {
    name: 'AntiGHGas',
    nullable: true,
    default: () => 'NULL',
  })
  antiGhGas: number | null;

  @Column('integer', {
    name: 'Dangerous',
    nullable: true,
    default: () => 'NULL',
  })
  dangerous: number | null;

  @Column('double', { name: 'DangerousLevel', nullable: true })
  dangerousLevel: number | null;
}
