import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_HullDescription')
export class FctHullDescription {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'HullDescriptionID',
  })
  hullDescriptionId: number;

  @Column('varchar', {
    name: 'Description',
    nullable: true,
    length: 50,
    default: () => 'NULL',
  })
  description: string | null;

  @Column('varchar', {
    name: 'HullAbbr',
    nullable: true,
    length: 10,
    default: () => 'NULL',
  })
  hullAbbr: string | null;
}
