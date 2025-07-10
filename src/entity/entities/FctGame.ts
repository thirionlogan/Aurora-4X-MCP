import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('FCT_Game')
export class FctGame {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'GameID' })
  gameId: number;

  @Column('integer', {
    name: 'AutoJumpGates',
    nullable: true,
    default: () => '0',
  })
  autoJumpGates: number | null;

  @Column('integer', {
    name: 'CivilianShippingLinesActive',
    nullable: true,
    default: () => '1',
  })
  civilianShippingLinesActive: number | null;

  @Column('integer', {
    name: 'DefaultRaceID',
    nullable: true,
    default: () => '0',
  })
  defaultRaceId: number | null;

  @Column('integer', {
    name: 'DifficultyModifier',
    nullable: true,
    default: () => '100',
  })
  difficultyModifier: number | null;

  @Column('text', { name: 'GameName', nullable: true, default: () => 'NULL' })
  gameName: string | null;

  @Column('double', { name: 'GameTime', nullable: true, default: () => '1' })
  gameTime: number | null;

  @Column('integer', {
    name: 'GenerateNonTNOnly',
    nullable: true,
    default: () => '0',
  })
  generateNonTnOnly: number | null;

  @Column('integer', {
    name: 'GenerateNPRs',
    nullable: true,
    default: () => '0',
  })
  generateNpRs: number | null;

  @Column('integer', {
    name: 'InexpFleets',
    nullable: true,
    default: () => '1',
  })
  inexpFleets: number | null;

  @Column('integer', { name: 'Invaders', nullable: true, default: () => '0' })
  invaders: number | null;

  @Column('double', {
    name: 'LastGrowthTime',
    nullable: true,
    default: () => '0',
  })
  lastGrowthTime: number | null;

  @Column('double', { name: 'LastViewed', nullable: true, default: () => '0' })
  lastViewed: number | null;

  @Column('integer', {
    name: 'LocalSystemChance',
    nullable: true,
    default: () => '50',
  })
  localSystemChance: number | null;

  @Column('integer', {
    name: 'LocalSystemSpread',
    nullable: true,
    default: () => '15',
  })
  localSystemSpread: number | null;

  @Column('integer', { name: 'MinComets', nullable: true, default: () => '0' })
  minComets: number | null;

  @Column('integer', {
    name: 'NewRuinCreationChance',
    nullable: true,
    default: () => '20',
  })
  newRuinCreationChance: number | null;

  @Column('integer', {
    name: 'NoOverhauls',
    nullable: true,
    default: () => '0',
  })
  noOverhauls: number | null;

  @Column('integer', {
    name: 'NonPlayerSystemDetection',
    nullable: true,
    default: () => '0',
  })
  nonPlayerSystemDetection: number | null;

  @Column('integer', {
    name: 'NumberOfSystems',
    nullable: true,
    default: () => '1000',
  })
  numberOfSystems: number | null;

  @Column('integer', {
    name: 'OrbitalMotion',
    nullable: true,
    default: () => '0',
  })
  orbitalMotion: number | null;

  @Column('integer', {
    name: 'OrbitalMotionAst',
    nullable: true,
    default: () => '0',
  })
  orbitalMotionAst: number | null;

  @Column('double', {
    name: 'PlayerExplorationTime',
    nullable: true,
    default: () => 'NULL',
  })
  playerExplorationTime: number | null;

  @Column('integer', {
    name: 'PoliticalAdmirals',
    nullable: true,
    default: () => '1',
  })
  politicalAdmirals: number | null;

  @Column('integer', { name: 'Precursors', nullable: true, default: () => '0' })
  precursors: number | null;

  @Column('integer', {
    name: 'RaceChance',
    nullable: true,
    default: () => '30',
  })
  raceChance: number | null;

  @Column('integer', {
    name: 'RaceChanceNPR',
    nullable: true,
    default: () => '10',
  })
  raceChanceNpr: number | null;

  @Column('integer', {
    name: 'RealisticPromotions',
    nullable: true,
    default: () => '1',
  })
  realisticPromotions: number | null;

  @Column('text', { name: 'SMPassword', nullable: true, default: () => 'NULL' })
  smPassword: string | null;

  @Column('integer', { name: 'StarSwarm', nullable: true, default: () => '0' })
  starSwarm: number | null;

  @Column('integer', {
    name: 'StartYear',
    nullable: true,
    default: () => '2020',
  })
  startYear: number | null;

  @Column('integer', {
    name: 'SubPulseLength',
    nullable: true,
    default: () => '0',
  })
  subPulseLength: number | null;

  @Column('double', {
    name: 'TruceCountdown',
    nullable: true,
    default: () => '0',
  })
  truceCountdown: number | null;

  @Column('integer', {
    name: 'UseKnownStars',
    nullable: true,
    default: () => '0',
  })
  useKnownStars: number | null;

  @Column('integer', {
    name: 'MinConstructionPeriod',
    nullable: true,
    default: () => '432000',
  })
  minConstructionPeriod: number | null;

  @Column('integer', {
    name: 'MinGroundCombatPeriod',
    nullable: true,
    default: () => '28800',
  })
  minGroundCombatPeriod: number | null;

  @Column('double', {
    name: 'LastGroundCombatTime',
    nullable: true,
    default: () => '0',
  })
  lastGroundCombatTime: number | null;

  @Column('integer', {
    name: 'SolDisaster',
    nullable: true,
    default: () => '0',
  })
  solDisaster: number | null;

  @Column('integer', {
    name: 'TechFromConquest',
    nullable: true,
    default: () => '1',
  })
  techFromConquest: number | null;

  @Column('integer', {
    name: 'ResearchSpeed',
    nullable: true,
    default: () => '100',
  })
  researchSpeed: number | null;

  @Column('integer', {
    name: 'TerraformingSpeed',
    nullable: true,
    default: () => '100',
  })
  terraformingSpeed: number | null;

  @Column('integer', {
    name: 'AllowCivilianHarvesters',
    nullable: true,
    default: () => '1',
  })
  allowCivilianHarvesters: number | null;

  @Column('integer', { name: 'Rakhas', nullable: true, default: () => '0' })
  rakhas: number | null;

  @Column('integer', { name: 'HumanNPRs', nullable: true, default: () => '0' })
  humanNpRs: number | null;

  @Column('boolean', {
    name: 'CurrentGroundCombat',
    nullable: true,
    default: () => 'FALSE',
  })
  currentGroundCombat: boolean | null;

  @Column('integer', {
    name: 'SurveySpeed',
    nullable: true,
    default: () => '100',
  })
  surveySpeed: number | null;

  @Column('integer', {
    name: 'MaxEventDays',
    nullable: true,
    default: () => '60',
  })
  maxEventDays: number | null;

  @Column('integer', {
    name: 'MaxEventCount',
    nullable: true,
    default: () => '300',
  })
  maxEventCount: number | null;

  @Column('integer', {
    name: 'ConstellationNames',
    nullable: true,
    default: () => 'FALSE',
  })
  constellationNames: number | null;

  @Column('integer', {
    name: 'NPRsGeneratePrecursors',
    nullable: true,
    default: () => '0',
  })
  npRsGeneratePrecursors: number | null;

  @Column('integer', {
    name: 'NPRsGenerateSwarm',
    nullable: true,
    default: () => '0',
  })
  npRsGenerateSwarm: number | null;

  @Column('integer', {
    name: 'NPRsGenerateRifts',
    nullable: true,
    default: () => '0',
  })
  npRsGenerateRifts: number | null;

  @Column('integer', { name: 'Eldar', nullable: true, default: () => '0' })
  eldar: number | null;

  @Column('integer', {
    name: 'NPRsEncounterRaiders',
    nullable: true,
    default: () => '0',
  })
  npRsEncounterRaiders: number | null;

  @Column('integer', {
    name: 'EldarOpGroupProgression',
    nullable: true,
    default: () => '0',
  })
  eldarOpGroupProgression: number | null;

  @Column('integer', {
    name: 'RaiderSystems',
    nullable: true,
    default: () => '0',
  })
  raiderSystems: number | null;

  @Column('integer', {
    name: 'SwarmSystems',
    nullable: true,
    default: () => '0',
  })
  swarmSystems: number | null;

  @Column('integer', {
    name: 'InvaderSystems',
    nullable: true,
    default: () => '0',
  })
  invaderSystems: number | null;

  @Column('integer', {
    name: 'StarEccentricity',
    nullable: true,
    default: () => '0',
  })
  starEccentricity: number | null;

  @Column('integer', {
    name: 'GasGiantEffects',
    nullable: true,
    default: () => '0',
  })
  gasGiantEffects: number | null;

  @Column('integer', {
    name: 'LimitedLabs',
    nullable: true,
    default: () => '0',
  })
  limitedLabs: number | null;

  @Column('integer', {
    name: 'OneSecondSubPulse',
    nullable: true,
    default: () => '1',
  })
  oneSecondSubPulse: number | null;

  @Column('integer', {
    name: 'HostilityModifier',
    nullable: true,
    default: () => '0',
  })
  hostilityModifier: number | null;

  @Column('double', {
    name: 'StartTimeEldar',
    nullable: true,
    default: () => '0',
  })
  startTimeEldar: number | null;

  @Column('double', {
    name: 'StartTimeSwarm',
    nullable: true,
    default: () => '0',
  })
  startTimeSwarm: number | null;

  @Column('double', {
    name: 'StartTimeInvaders',
    nullable: true,
    default: () => '0',
  })
  startTimeInvaders: number | null;

  @Column('integer', {
    name: 'MinorRaceChance',
    nullable: true,
    default: () => '25',
  })
  minorRaceChance: number | null;
}
