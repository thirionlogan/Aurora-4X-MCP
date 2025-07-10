import { Column, Entity } from "typeorm";

@Entity("FCT_DesignPhilosophy")
export class FctDesignPhilosophy {
  @Column("integer", { name: "GameID", nullable: true, default: () => "0" })
  gameId: number | null;

  @Column("integer", {
    name: "ActiveAntiFAC",
    nullable: true,
    default: () => "0",
  })
  activeAntiFac: number | null;

  @Column("integer", {
    name: "ActiveAntiFighter",
    nullable: true,
    default: () => "0",
  })
  activeAntiFighter: number | null;

  @Column("integer", {
    name: "ActiveLarge",
    nullable: true,
    default: () => "0",
  })
  activeLarge: number | null;

  @Column("integer", {
    name: "ActiveVeryLarge",
    nullable: true,
    default: () => "0",
  })
  activeVeryLarge: number | null;

  @Column("integer", {
    name: "ActiveResolution",
    nullable: true,
    default: () => "0",
  })
  activeResolution: number | null;

  @Column("integer", {
    name: "PrimaryBeamPreference",
    nullable: true,
    default: () => "0",
  })
  primaryBeamPreference: number | null;

  @Column("integer", {
    name: "LauncherSize",
    nullable: true,
    default: () => "0",
  })
  launcherSize: number | null;

  @Column("integer", { name: "NumSalvos", nullable: true, default: () => "0" })
  numSalvos: number | null;

  @Column("integer", {
    name: "WarshipArmour",
    nullable: true,
    default: () => "0",
  })
  warshipArmour: number | null;

  @Column("integer", {
    name: "WarshipEngineering",
    nullable: true,
    default: () => "0",
  })
  warshipEngineering: number | null;

  @Column("integer", {
    name: "WarshipHullSize",
    nullable: true,
    default: () => "0",
  })
  warshipHullSize: number | null;

  @Column("integer", {
    name: "ActiveAntiMissile",
    nullable: true,
    default: () => "0",
  })
  activeAntiMissile: number | null;

  @Column("integer", {
    name: "FireControlAntiMissile",
    nullable: true,
    default: () => "0",
  })
  fireControlAntiMissile: number | null;

  @Column("integer", {
    name: "FireControlAntiFAC",
    nullable: true,
    default: () => "0",
  })
  fireControlAntiFac: number | null;

  @Column("integer", {
    name: "FireControlAntiFighter",
    nullable: true,
    default: () => "0",
  })
  fireControlAntiFighter: number | null;

  @Column("integer", {
    name: "FireControlStandardMissile",
    nullable: true,
    default: () => "0",
  })
  fireControlStandardMissile: number | null;

  @Column("integer", {
    name: "JumpDriveBattlecruiser",
    nullable: true,
    default: () => "0",
  })
  jumpDriveBattlecruiser: number | null;

  @Column("integer", {
    name: "FireControlBeamRange",
    nullable: true,
    default: () => "0",
  })
  fireControlBeamRange: number | null;

  @Column("integer", {
    name: "FireControlBeamSpeed",
    nullable: true,
    default: () => "0",
  })
  fireControlBeamSpeed: number | null;

  @Column("integer", {
    name: "JumpDriveCruiser",
    nullable: true,
    default: () => "0",
  })
  jumpDriveCruiser: number | null;

  @Column("integer", {
    name: "JumpDriveDestroyer",
    nullable: true,
    default: () => "0",
  })
  jumpDriveDestroyer: number | null;

  @Column("integer", {
    name: "NumCommercialEngines",
    nullable: true,
    default: () => "0",
  })
  numCommercialEngines: number | null;

  @Column("integer", {
    name: "JumpDriveSurvey",
    nullable: true,
    default: () => "0",
  })
  jumpDriveSurvey: number | null;

  @Column("integer", {
    name: "EMSensorSize1",
    nullable: true,
    default: () => "0",
  })
  emSensorSize1: number | null;

  @Column("integer", {
    name: "EMSensorSize2",
    nullable: true,
    default: () => "0",
  })
  emSensorSize2: number | null;

  @Column("integer", {
    name: "EMSensorSize3",
    nullable: true,
    default: () => "0",
  })
  emSensorSize3: number | null;

  @Column("integer", {
    name: "EMSensorSize6",
    nullable: true,
    default: () => "0",
  })
  emSensorSize6: number | null;

  @Column("integer", {
    name: "EngineCommercial",
    nullable: true,
    default: () => "0",
  })
  engineCommercial: number | null;

  @Column("integer", {
    name: "EngineMilitary",
    nullable: true,
    default: () => "0",
  })
  engineMilitary: number | null;

  @Column("integer", { name: "EngineFAC", nullable: true, default: () => "0" })
  engineFac: number | null;

  @Column("integer", {
    name: "EngineFighter",
    nullable: true,
    default: () => "0",
  })
  engineFighter: number | null;

  @Column("integer", {
    name: "MissileCaptorMine",
    nullable: true,
    default: () => "0",
  })
  missileCaptorMine: number | null;

  @Column("integer", {
    name: "LauncherFAC",
    nullable: true,
    default: () => "0",
  })
  launcherFac: number | null;

  @Column("integer", {
    name: "FireControlFACMissile",
    nullable: true,
    default: () => "0",
  })
  fireControlFacMissile: number | null;

  @Column("integer", { name: "Gauss", nullable: true, default: () => "0" })
  gauss: number | null;

  @Column("integer", { name: "LaserLarge", nullable: true, default: () => "0" })
  laserLarge: number | null;

  @Column("integer", {
    name: "LauncherStandard",
    nullable: true,
    default: () => "0",
  })
  launcherStandard: number | null;

  @Column("integer", { name: "Meson", nullable: true, default: () => "0" })
  meson: number | null;

  @Column("integer", {
    name: "LauncherMine",
    nullable: true,
    default: () => "0",
  })
  launcherMine: number | null;

  @Column("integer", {
    name: "LauncherMineSize",
    nullable: true,
    default: () => "0",
  })
  launcherMineSize: number | null;

  @Column("integer", {
    name: "MissileMineSecondStage",
    nullable: true,
    default: () => "0",
  })
  missileMineSecondStage: number | null;

  @Column("integer", {
    name: "LaserPointDefence",
    nullable: true,
    default: () => "0",
  })
  laserPointDefence: number | null;

  @Column("integer", {
    name: "LauncherPointDefence",
    nullable: true,
    default: () => "0",
  })
  launcherPointDefence: number | null;

  @Column("integer", {
    name: "MesonPointDefence",
    nullable: true,
    default: () => "0",
  })
  mesonPointDefence: number | null;

  @Column("integer", {
    name: "MissilePointDefence",
    nullable: true,
    default: () => "0",
  })
  missilePointDefence: number | null;

  @Column("integer", {
    name: "PointDefencePreference",
    nullable: true,
    default: () => "0",
  })
  pointDefencePreference: number | null;

  @Column("integer", {
    name: "PointDefenceWeapon",
    nullable: true,
    default: () => "0",
  })
  pointDefenceWeapon: number | null;

  @Column("integer", { name: "Railgun", nullable: true, default: () => "0" })
  railgun: number | null;

  @Column("integer", {
    name: "MissileStandard",
    nullable: true,
    default: () => "0",
  })
  missileStandard: number | null;

  @Column("integer", {
    name: "EngineSurvey",
    nullable: true,
    default: () => "0",
  })
  engineSurvey: number | null;

  @Column("integer", {
    name: "ParticleBeam",
    nullable: true,
    default: () => "0",
  })
  particleBeam: number | null;

  @Column("integer", {
    primary: true,
    name: "RaceID",
    nullable: true,
    default: () => "NULL",
  })
  raceId: number | null;

  @Column("integer", { name: "Carronade", nullable: true, default: () => "0" })
  carronade: number | null;

  @Column("integer", { name: "CIWS", nullable: true, default: () => "0" })
  ciws: number | null;

  @Column("integer", { name: "Cloak", nullable: true, default: () => "0" })
  cloak: number | null;

  @Column("integer", {
    name: "ActiveStandard",
    nullable: true,
    default: () => "0",
  })
  activeStandard: number | null;

  @Column("integer", {
    name: "EngineSizeMilitary",
    nullable: true,
    default: () => "0",
  })
  engineSizeMilitary: number | null;

  @Column("integer", {
    name: "EngineSizeCommercial",
    nullable: true,
    default: () => "25",
  })
  engineSizeCommercial: number | null;

  @Column("integer", { name: "MissileFAC", nullable: true, default: () => "0" })
  missileFac: number | null;

  @Column("integer", {
    name: "LaserSpinal",
    nullable: true,
    default: () => "0",
  })
  laserSpinal: number | null;

  @Column("integer", {
    name: "ThermalSensorSize1",
    nullable: true,
    default: () => "0",
  })
  thermalSensorSize1: number | null;

  @Column("integer", {
    name: "ThermalSensorSize2",
    nullable: true,
    default: () => "0",
  })
  thermalSensorSize2: number | null;

  @Column("integer", {
    name: "ThermalSensorSize3",
    nullable: true,
    default: () => "0",
  })
  thermalSensorSize3: number | null;

  @Column("integer", {
    name: "ThermalSensorSize6",
    nullable: true,
    default: () => "0",
  })
  thermalSensorSize6: number | null;

  @Column("double", {
    name: "ShieldProportion",
    nullable: true,
    default: () => "0",
  })
  shieldProportion: number | null;

  @Column("integer", {
    name: "NumWarshipEngines",
    nullable: true,
    default: () => "2",
  })
  numWarshipEngines: number | null;

  @Column("integer", {
    name: "WarshipEngineProportion",
    nullable: true,
    default: () => "0",
  })
  warshipEngineProportion: number | null;

  @Column("integer", {
    name: "SecondaryBeamPreference",
    nullable: true,
    default: () => "0",
  })
  secondaryBeamPreference: number | null;

  @Column("double", {
    name: "SurveyEngineBoost",
    nullable: true,
    default: () => "0.7",
  })
  surveyEngineBoost: number | null;

  @Column("integer", {
    name: "SurveySensors",
    nullable: true,
    default: () => "2",
  })
  surveySensors: number | null;

  @Column("integer", {
    name: "TerraformModules",
    nullable: true,
    default: () => "0",
  })
  terraformModules: number | null;

  @Column("integer", {
    name: "HarvesterModules",
    nullable: true,
    default: () => "0",
  })
  harvesterModules: number | null;

  @Column("integer", {
    name: "MiningModules",
    nullable: true,
    default: () => "0",
  })
  miningModules: number | null;

  @Column("integer", {
    name: "HighPowerMicrowaveLarge",
    nullable: true,
    default: () => "0",
  })
  highPowerMicrowaveLarge: number | null;

  @Column("integer", {
    name: "HighPowerMicrowaveSmall",
    nullable: true,
    default: () => "0",
  })
  highPowerMicrowaveSmall: number | null;

  @Column("integer", { name: "ActiveSmall", nullable: true })
  activeSmall: number | null;

  @Column("integer", {
    name: "ActiveNavigation",
    nullable: true,
    default: () => "0",
  })
  activeNavigation: number | null;

  @Column("integer", {
    name: "JumpDriveMediumHive",
    nullable: true,
    default: () => "0",
  })
  jumpDriveMediumHive: number | null;

  @Column("integer", {
    name: "JumpDriveLargeHive",
    nullable: true,
    default: () => "0",
  })
  jumpDriveLargeHive: number | null;

  @Column("integer", {
    name: "JumpDriveVeryLargeHive",
    nullable: true,
    default: () => "0",
  })
  jumpDriveVeryLargeHive: number | null;

  @Column("integer", {
    name: "RailgunPointDefence",
    nullable: true,
    default: () => "0",
  })
  railgunPointDefence: number | null;

  @Column("integer", {
    name: "FireControlBeamShortRange",
    nullable: true,
    default: () => "0",
  })
  fireControlBeamShortRange: number | null;

  @Column("integer", {
    name: "ActiveAntiMissileSmall",
    nullable: true,
    default: () => "0",
  })
  activeAntiMissileSmall: number | null;

  @Column("integer", { name: "CloakDD", nullable: true, default: () => "0" })
  cloakDd: number | null;

  @Column("integer", { name: "CloakCA", nullable: true, default: () => "0" })
  cloakCa: number | null;

  @Column("integer", { name: "CloakBC", nullable: true, default: () => "0" })
  cloakBc: number | null;

  @Column("integer", {
    name: "LauncherSizeModifier",
    nullable: true,
    default: () => "0",
  })
  launcherSizeModifier: number | null;

  @Column("integer", {
    name: "NumSalvosAMM",
    nullable: true,
    default: () => "0",
  })
  numSalvosAmm: number | null;

  @Column("integer", {
    name: "NPRMissileStrategy",
    nullable: true,
    default: () => "0",
  })
  nprMissileStrategy: number | null;

  @Column("integer", { name: "MaxGeo", nullable: true, default: () => "0" })
  maxGeo: number | null;

  @Column("integer", { name: "MaxGrav", nullable: true, default: () => "0" })
  maxGrav: number | null;

  @Column("integer", { name: "MaxScout", nullable: true, default: () => "0" })
  maxScout: number | null;

  @Column("integer", {
    name: "MaxDiplomatic",
    nullable: true,
    default: () => "0",
  })
  maxDiplomatic: number | null;

  @Column("integer", {
    name: "MaxStabilisation",
    nullable: true,
    default: () => "0",
  })
  maxStabilisation: number | null;

  @Column("integer", { name: "MaxSalvage", nullable: true, default: () => "0" })
  maxSalvage: number | null;

  @Column("integer", { name: "MaxTanker", nullable: true, default: () => "0" })
  maxTanker: number | null;

  @Column("double", {
    name: "MilitaryEngineBoost",
    nullable: true,
    default: () => "1",
  })
  militaryEngineBoost: number | null;

  @Column("boolean", {
    name: "UseJumpDrives",
    nullable: true,
    default: () => "FALSE",
  })
  useJumpDrives: boolean | null;

  @Column("boolean", {
    name: "OrdnanceFactories",
    nullable: true,
    default: () => "FALSE",
  })
  ordnanceFactories: boolean | null;

  @Column("boolean", {
    name: "FighterFactories",
    nullable: true,
    default: () => "FALSE",
  })
  fighterFactories: boolean | null;

  @Column("double", {
    name: "ArmourMultiplier",
    nullable: true,
    default: () => "1",
  })
  armourMultiplier: number | null;

  @Column("integer", {
    name: "GroundForceDeploymentThemeID",
    nullable: true,
    default: () => "1",
  })
  groundForceDeploymentThemeId: number | null;

  @Column("integer", {
    name: "OpGroupProgressionType",
    nullable: true,
    default: () => "0",
  })
  opGroupProgressionType: number | null;

  @Column("integer", {
    name: "LauncherDecoy",
    nullable: true,
    default: () => "0",
  })
  launcherDecoy: number | null;

  @Column("integer", {
    name: "LauncherDecoySize",
    nullable: true,
    default: () => "0",
  })
  launcherDecoySize: number | null;

  @Column("integer", {
    name: "DecoyMissile",
    nullable: true,
    default: () => "0",
  })
  decoyMissile: number | null;

  @Column("double", {
    name: "LauncherAMMSize",
    nullable: true,
    default: () => "1",
  })
  launcherAmmSize: number | null;
}
