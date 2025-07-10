import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_SetAtmosphere')
export class DimSetAtmosphere {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'AtmosphereID',
  })
  atmosphereId: number;

  @Column('integer', {
    name: 'TempBand',
    nullable: true,
    default: () => 'NULL',
  })
  tempBand: number | null;

  @Column('integer', {
    name: 'MaxChance',
    nullable: true,
    default: () => 'NULL',
  })
  maxChance: number | null;

  @Column('integer', { name: 'Gas1', nullable: true, default: () => '0' })
  gas1: number | null;

  @Column('integer', { name: 'Gas2', nullable: true, default: () => '0' })
  gas2: number | null;

  @Column('integer', { name: 'Gas3', nullable: true, default: () => '0' })
  gas3: number | null;

  @Column('varchar', {
    name: 'Description',
    nullable: true,
    length: 100,
    default: () => 'NULL',
  })
  description: string | null;
}
