import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_ClassComponent')
export class FctClassComponent {
  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @PrimaryColumn('integer', { name: 'ClassID' })
  classId: number;

  @PrimaryColumn('integer', { name: 'ComponentID' })
  componentId: number;

  @Column('double', {
    name: 'NumComponent',
    nullable: true,
    default: () => 'NULL',
  })
  numComponent: number | null;

  @Column('integer', {
    name: 'ChanceToHit',
    nullable: true,
    default: () => '0',
  })
  chanceToHit: number | null;

  @Column('integer', {
    name: 'ElectronicCTH',
    nullable: true,
    default: () => '0',
  })
  electronicCth: number | null;
}
