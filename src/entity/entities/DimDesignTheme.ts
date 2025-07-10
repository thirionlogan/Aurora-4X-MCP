import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_DesignTheme')
export class DimDesignTheme {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'DesignThemeID' })
  designThemeId: number;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('text', { name: 'Name', nullable: true })
  name: string | null;

  @Column('integer', { name: 'RandomWeight', nullable: true })
  randomWeight: number | null;

  @Column('integer', { name: 'PrimaryBeamWeapon', nullable: true })
  primaryBeamWeapon: number | null;

  @Column('integer', { name: 'SecondaryBeamWeapon', nullable: true })
  secondaryBeamWeapon: number | null;

  @Column('integer', { name: 'PointDefenceWeapon', nullable: true })
  pointDefenceWeapon: number | null;

  @Column('integer', {
    name: 'SpecialNPRID',
    nullable: true,
    default: () => '0',
  })
  specialNprid: number | null;
}
