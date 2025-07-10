import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('FCT_Fleet')
export class FctFleet {
  @PrimaryColumn({ type: 'integer', name: 'FleetID' })
  fleetId: number;

  @PrimaryColumn('integer', { name: 'GameID' })
  gameId: number;

  @Column('text', { name: 'FleetName', nullable: true, default: () => 'NULL' })
  fleetName: string | null;

  @Column('integer', {
    name: 'AssignedPopulationID',
    nullable: true,
    default: () => '0',
  })
  assignedPopulationId: number | null;

  @Column('integer', {
    name: 'ParentCommandID',
    nullable: true,
    default: () => '0',
  })
  parentCommandId: number | null;

  @Column('integer', {
    name: 'OrbitBodyID',
    nullable: true,
    default: () => '0',
  })
  orbitBodyId: number | null;

  @Column('integer', {
    name: 'OrbitDistance',
    nullable: true,
    default: () => '0',
  })
  orbitDistance: number | null;

  @Column('double', {
    name: 'OrbitBearing',
    nullable: true,
    default: () => '0',
  })
  orbitBearing: number | null;

  @Column('integer', { name: 'RaceID', nullable: true, default: () => 'NULL' })
  raceId: number | null;

  @Column('integer', { name: 'SystemID', nullable: true, default: () => '0' })
  systemId: number | null;

  @Column('integer', {
    name: 'TradeLocation',
    nullable: true,
    default: () => '0',
  })
  tradeLocation: number | null;

  @Column('integer', {
    name: 'CivilianFunction',
    nullable: true,
    default: () => '0',
  })
  civilianFunction: number | null;

  @Column('boolean', {
    name: 'NPRHomeGuard',
    nullable: true,
    default: () => 'NULL',
  })
  nprHomeGuard: boolean | null;

  @Column('boolean', {
    name: 'TFTraining',
    nullable: true,
    default: () => 'NULL',
  })
  tfTraining: boolean | null;

  @Column('integer', {
    name: 'SpecialOrderID',
    nullable: true,
    default: () => '0',
  })
  specialOrderId: number | null;

  @Column('integer', {
    name: 'SpecialOrderID2',
    nullable: true,
    default: () => '0',
  })
  specialOrderId2: number | null;

  @Column('integer', { name: 'Speed', nullable: true, default: () => '1' })
  speed: number | null;

  @Column('integer', {
    name: 'MaxNebulaSpeed',
    nullable: true,
    default: () => '1',
  })
  maxNebulaSpeed: number | null;

  @Column('double', { name: 'Xcor', nullable: true, default: () => '0' })
  xcor: number | null;

  @Column('double', { name: 'Ycor', nullable: true, default: () => '0' })
  ycor: number | null;

  @Column('double', { name: 'LastXcor', nullable: true, default: () => '0' })
  lastXcor: number | null;

  @Column('double', { name: 'LastYcor', nullable: true, default: () => '0' })
  lastYcor: number | null;

  @Column('double', {
    name: 'LastMoveTime',
    nullable: true,
    default: () => '0',
  })
  lastMoveTime: number | null;

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

  @Column('integer', { name: 'EntryJPID', nullable: true, default: () => '0' })
  entryJpid: number | null;

  @Column('integer', { name: 'CycleMoves', nullable: true, default: () => '0' })
  cycleMoves: number | null;

  @Column('integer', {
    name: 'JustDivided',
    nullable: true,
    default: () => '0',
  })
  justDivided: number | null;

  @Column('integer', {
    name: 'AxisContactID',
    nullable: true,
    default: () => '0',
  })
  axisContactId: number | null;

  @Column('integer', { name: 'Distance', nullable: true, default: () => '0' })
  distance: number | null;

  @Column('integer', {
    name: 'OffsetBearing',
    nullable: true,
    default: () => '0',
  })
  offsetBearing: number | null;

  @Column('integer', {
    name: 'ConditionOne',
    nullable: true,
    default: () => '0',
  })
  conditionOne: number | null;

  @Column('integer', {
    name: 'ConditionTwo',
    nullable: true,
    default: () => '0',
  })
  conditionTwo: number | null;

  @Column('integer', {
    name: 'ConditionalOrderOne',
    nullable: true,
    default: () => '0',
  })
  conditionalOrderOne: number | null;

  @Column('integer', {
    name: 'ConditionalOrderTwo',
    nullable: true,
    default: () => '0',
  })
  conditionalOrderTwo: number | null;

  @Column('boolean', { name: 'AvoidDanger', nullable: true })
  avoidDanger: boolean | null;

  @Column('boolean', { name: 'AvoidAlienSystems', nullable: true })
  avoidAlienSystems: boolean | null;

  @Column('integer', {
    name: 'NPROperationalGroupID',
    nullable: true,
    default: () => '0',
  })
  nprOperationalGroupId: number | null;

  @Column('boolean', { name: 'DisplaySensors', nullable: true })
  displaySensors: boolean | null;

  @Column('boolean', { name: 'DisplayWeapons', nullable: true })
  displayWeapons: boolean | null;

  @Column('integer', {
    name: 'AssignedFormationID',
    nullable: true,
    default: () => '0',
  })
  assignedFormationId: number | null;

  @Column('integer', {
    name: 'ShippingLine',
    nullable: true,
    default: () => '0',
  })
  shippingLine: number | null;

  @Column('boolean', {
    name: 'UseMaximumSpeed',
    nullable: true,
    default: () => 'TRUE',
  })
  useMaximumSpeed: boolean | null;

  @Column('boolean', {
    name: 'RedeployOrderGiven',
    nullable: true,
    default: () => 'FALSE',
  })
  redeployOrderGiven: boolean | null;

  @Column('integer', {
    name: 'MaxStandingOrderDistance',
    nullable: true,
    default: () => '0',
  })
  maxStandingOrderDistance: number | null;

  @Column('boolean', {
    name: 'NoSurrender',
    nullable: true,
    default: () => 'FALSE',
  })
  noSurrender: boolean | null;

  @Column('integer', {
    name: 'SpecificThreatID',
    nullable: true,
    default: () => '0',
  })
  specificThreatId: number | null;

  @Column('integer', {
    name: 'AnchorFleetID',
    nullable: true,
    default: () => '0',
  })
  anchorFleetId: number | null;

  @Column('double', {
    name: 'AnchorFleetDistance',
    nullable: true,
    default: () => '0',
  })
  anchorFleetDistance: number | null;

  @Column('double', {
    name: 'AnchorFleetBearingOffset',
    nullable: true,
    default: () => '0',
  })
  anchorFleetBearingOffset: number | null;

  @Column('boolean', {
    name: 'GuardNearestHostileContact',
    nullable: true,
    default: () => 'FALSE',
  })
  guardNearestHostileContact: boolean | null;

  @Column('boolean', {
    name: 'UseAnchorDestination',
    nullable: true,
    default: () => 'FALSE',
  })
  useAnchorDestination: boolean | null;

  @Column('boolean', {
    name: 'GuardNearestKnownWarship',
    nullable: true,
    default: () => 'FALSE',
  })
  guardNearestKnownWarship: boolean | null;

  @Column('boolean', {
    name: 'AssumeJumpCapable',
    nullable: true,
    default: () => 'FALSE',
  })
  assumeJumpCapable: boolean | null;

  @Column('double', {
    name: 'LastTransitTime',
    nullable: true,
    default: () => '0',
  })
  lastTransitTime: number | null;

  @Column('double', {
    name: 'EscapeTimeRemaining',
    nullable: true,
    default: () => '0',
  })
  escapeTimeRemaining: number | null;
}
