import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_PlanetaryTerrain')
export class DimPlanetaryTerrain {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TerrainID' })
  terrainId: number;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('text', { name: 'Abbreviation', nullable: true })
  abbreviation: string | null;

  @Column('double', { name: 'FortificationModifier', nullable: true })
  fortificationModifier: number | null;

  @Column('double', { name: 'ToHitModifier', nullable: true })
  toHitModifier: number | null;

  @Column('double', { name: 'MinimumHydro', nullable: true })
  minimumHydro: number | null;

  @Column('double', { name: 'MinimumOxygen', nullable: true })
  minimumOxygen: number | null;

  @Column('double', { name: 'MaximumHydro', nullable: true })
  maximumHydro: number | null;

  @Column('double', { name: 'MinimumTemperature', nullable: true })
  minimumTemperature: number | null;

  @Column('double', { name: 'MaximumTemperature', nullable: true })
  maximumTemperature: number | null;

  @Column('integer', { name: 'MaximumTectonics', nullable: true })
  maximumTectonics: number | null;

  @Column('integer', { name: 'MinimumTectonics', nullable: true })
  minimumTectonics: number | null;

  @Column('integer', {
    name: 'BaseTerrainType',
    nullable: true,
    default: () => '0',
  })
  baseTerrainType: number | null;

  @Column('integer', {
    name: 'MinTempRange',
    nullable: true,
    default: () => '0',
  })
  minTempRange: number | null;

  @Column('boolean', {
    name: 'DesertTerrain',
    nullable: true,
    default: () => 'FALSE',
  })
  desertTerrain: boolean | null;

  @Column('boolean', {
    name: 'JungleTerrain',
    nullable: true,
    default: () => 'FALSE',
  })
  jungleTerrain: boolean | null;
}
