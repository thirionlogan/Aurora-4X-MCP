import { Column, Entity, Index } from 'typeorm';

@Index('DefaultEventColour_EventTypeID', ['eventTypeId'], {})
@Entity('DefaultEventColour')
export class DefaultEventColour {
  @Column('integer', {
    primary: true,
    name: 'EventTypeID',
    nullable: true,
    default: () => 'NULL',
  })
  eventTypeId: number | null;

  @Column('integer', {
    primary: true,
    name: 'RaceID',
    nullable: true,
    default: () => '0',
  })
  raceId: number | null;

  @Column('integer', {
    name: 'AlertColour',
    nullable: true,
    default: () => '0',
  })
  alertColour: number | null;

  @Column('integer', {
    name: 'TextColour',
    nullable: true,
    default: () => 'NULL',
  })
  textColour: number | null;

  @Column('integer', {
    name: 'CreationOrder',
    nullable: true,
    default: () => 'NULL',
  })
  creationOrder: number | null;

  @Column('text', { name: 'Test', nullable: true })
  test: string | null;
}
