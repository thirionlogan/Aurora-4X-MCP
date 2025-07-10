import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_OrganizationNode')
export class FctOrganizationNode {
  @PrimaryColumn('integer', {
    name: 'OrganizationID',
  })
  organizationId: number;

  @Column('text', { name: 'OrganizationName', nullable: true })
  organizationName: string | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => '0' })
  raceId: number | null;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('integer', {
    name: 'ParentOrganizationID',
    nullable: true,
    default: () => '0',
  })
  parentOrganizationId: number | null;

  @Column('integer', {
    name: 'FormationTemplateID',
    nullable: true,
    default: () => '0',
  })
  formationTemplateId: number | null;

  @Column('boolean', {
    name: 'NodeExpanded',
    nullable: true,
    default: () => 'FALSE',
  })
  nodeExpanded: boolean | null;

  @Column('integer', {
    name: 'FieldPosition',
    nullable: true,
    default: () => '0',
  })
  fieldPosition: number | null;
}
