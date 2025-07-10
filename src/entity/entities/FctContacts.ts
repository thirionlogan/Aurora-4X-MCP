import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Contacts')
export class FctContacts {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'UniqueID' })
  uniqueId: number;

  @Column('integer', {
    name: 'ContactID',
    nullable: true,
    default: () => 'NULL',
  })
  contactId: number | null;

  @Column('integer', { name: 'GameID', nullable: true, default: () => 'NULL' })
  gameId: number | null;

  @Column('integer', {
    name: 'SystemID',
    nullable: true,
    default: () => 'NULL',
  })
  systemId: number | null;

  @Column('integer', {
    name: 'DetectRaceID',
    nullable: true,
    default: () => 'NULL',
  })
  detectRaceId: number | null;

  @Column('integer', {
    name: 'ContactRaceID',
    nullable: true,
    default: () => '0',
  })
  contactRaceId: number | null;

  @Column('text', {
    name: 'ContactName',
    nullable: true,
    default: () => 'NULL',
  })
  contactName: string | null;

  @Column('double', {
    name: 'CreationTime',
    nullable: true,
    default: () => 'NULL',
  })
  creationTime: number | null;

  @Column('double', {
    name: 'Reestablished',
    nullable: true,
    default: () => '0',
  })
  reestablished: number | null;

  @Column('double', {
    name: 'LastUpdate',
    nullable: true,
    default: () => 'NULL',
  })
  lastUpdate: number | null;

  @Column('integer', {
    name: 'ContactMethod',
    nullable: true,
    default: () => '0',
  })
  contactMethod: number | null;

  @Column('integer', {
    name: 'ContactType',
    nullable: true,
    default: () => 'NULL',
  })
  contactType: number | null;

  @Column('double', {
    name: 'ContactStrength',
    nullable: true,
    default: () => 'NULL',
  })
  contactStrength: number | null;

  @Column('integer', {
    name: 'ContactNumber',
    nullable: true,
    default: () => '1',
  })
  contactNumber: number | null;

  @Column('integer', { name: 'Resolution', nullable: true, default: () => '0' })
  resolution: number | null;

  @Column('integer', {
    name: 'ContinualContactTime',
    nullable: true,
    default: () => '0',
  })
  continualContactTime: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => 'NULL' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => 'NULL' })
  ycor: number | null;

  @Column('double', { name: 'LastXcor', nullable: true, default: () => 'NULL' })
  lastXcor: number | null;

  @Column('double', { name: 'LastYcor', nullable: true, default: () => 'NULL' })
  lastYcor: number | null;

  @Column('integer', { name: 'Speed', nullable: true, default: () => '0' })
  speed: number | null;

  @Column('boolean', { name: 'Msg', nullable: true, default: () => 'NULL' })
  msg: boolean | null;

  @Column('double', {
    name: 'IncrementStartX',
    nullable: true,
    default: () => '0',
  })
  incrementStartX: number | null;

  @Column('double', {
    name: 'IncrementStartY',
    nullable: true,
    default: () => '0',
  })
  incrementStartY: number | null;
}
