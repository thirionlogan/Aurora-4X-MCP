import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_TraitsList')
export class DimTraitsList {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'TraitID' })
  traitId: number;

  @Column('integer', { name: 'GroupID', nullable: true, default: () => '2' })
  groupId: number | null;

  @Column('text', { name: 'Name', nullable: true, default: () => 'NULL' })
  name: string | null;
}
