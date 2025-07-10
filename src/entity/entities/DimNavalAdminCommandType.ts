import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('DIM_NavalAdminCommandType')
export class DimNavalAdminCommandType {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'CommandTypeID' })
  commandTypeId: number;

  @Column('text', { name: 'Description', nullable: true })
  description: string | null;

  @Column('text', { name: 'Abbrev', nullable: true })
  abbrev: string | null;

  @Column('double', { name: 'Radius', nullable: true })
  radius: number | null;

  @Column('double', { name: 'Survey', nullable: true })
  survey: number | null;

  @Column('double', { name: 'Industrial', nullable: true })
  industrial: number | null;

  @Column('double', { name: 'FleetTraining', nullable: true })
  fleetTraining: number | null;

  @Column('double', { name: 'Engineering', nullable: true, default: () => '0' })
  engineering: number | null;

  @Column('double', {
    name: 'CrewTraining',
    nullable: true,
    default: () => '0',
  })
  crewTraining: number | null;

  @Column('double', { name: 'Tactical', nullable: true, default: () => '0' })
  tactical: number | null;

  @Column('double', { name: 'Reaction', nullable: true, default: () => '0' })
  reaction: number | null;

  @Column('double', { name: 'Logistics', nullable: true })
  logistics: number | null;

  @Column('integer', {
    name: 'DisplayOrder',
    nullable: true,
    default: () => '0',
  })
  displayOrder: number | null;
}
