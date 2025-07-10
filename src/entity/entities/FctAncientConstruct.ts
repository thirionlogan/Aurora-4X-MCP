import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_AncientConstruct')
export class FctAncientConstruct {
  @PrimaryGeneratedColumn({
    type: 'integer',
    name: 'AncientConstructID',
  })
  ancientConstructId: number;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'SystemBodyID',
    nullable: true,
    default: () => 'NULL',
  })
  systemBodyId: number | null;

  @Column('integer', {
    name: 'AncientConstructTypeID',
    nullable: true,
    default: () => 'NULL',
  })
  ancientConstructTypeId: number | null;

  @Column('integer', {
    name: 'ResearchField',
    nullable: true,
    default: () => 'NULL',
  })
  researchField: number | null;

  @Column('double', {
    name: 'ResearchBonus',
    nullable: true,
    default: () => 'NULL',
  })
  researchBonus: number | null;

  @Column('boolean', { name: 'Active', nullable: true, default: () => 'FALSE' })
  active: boolean | null;
}
