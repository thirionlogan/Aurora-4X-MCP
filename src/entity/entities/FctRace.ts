import { Column, Entity } from "typeorm";

@Entity("FCT_Race")
export class FctRace {
  @Column("integer", { primary: true, name: "RaceID", nullable: true })
  raceId: number | null;

  @Column("integer", { name: "GameID", nullable: true })
  gameId: number | null;

  @Column("numeric", { name: "ConventionalStart", nullable: true })
  conventionalStart: number | null;

  @Column("numeric", { name: "NPR", nullable: true })
  npr: number | null;

  @Column("integer", { name: "SpecialNPRID", nullable: true })
  specialNprid: number | null;

  @Column("numeric", { name: "PreIndustrial", nullable: true })
  preIndustrial: number | null;

  @Column("integer", { name: "RaceGridSize", nullable: true })
  raceGridSize: number | null;

  @Column("text", { name: "RaceName", nullable: true })
  raceName: string | null;

  @Column("text", { name: "RaceTitle", nullable: true })
  raceTitle: string | null;

  @Column("real", { name: "WealthPoints", nullable: true })
  wealthPoints: number | null;

  @Column("real", { name: "PreviousWealth", nullable: true })
  previousWealth: number | null;

  @Column("real", { name: "StartingWealth", nullable: true })
  startingWealth: number | null;

  @Column("integer", { name: "AnnualWealth", nullable: true })
  annualWealth: number | null;

  @Column("integer", { name: "GovTypeID", nullable: true })
  govTypeId: number | null;

  @Column("numeric", { name: "UnreadMessages", nullable: true })
  unreadMessages: number | null;

  @Column("text", { name: "FlagPic", nullable: true })
  flagPic: string | null;

  @Column("text", { name: "HullPic", nullable: true })
  hullPic: string | null;

  @Column("integer", { name: "Contacts", nullable: true })
  contacts: number | null;

  @Column("integer", { name: "Colour", nullable: true })
  colour: number | null;

  @Column("integer", { name: "Red", nullable: true })
  red: number | null;

  @Column("integer", { name: "Green", nullable: true })
  green: number | null;

  @Column("integer", { name: "Blue", nullable: true })
  blue: number | null;

  @Column("text", { name: "Password", nullable: true })
  password: string | null;

  @Column("integer", { name: "ThemeID", nullable: true })
  themeId: number | null;

  @Column("integer", { name: "ClassThemeID", nullable: true })
  classThemeId: number | null;

  @Column("integer", { name: "SystemThemeID", nullable: true })
  systemThemeId: number | null;

  @Column("integer", { name: "NameThemeID", nullable: true })
  nameThemeId: number | null;

  @Column("integer", { name: "MinSystem", nullable: true })
  minSystem: number | null;

  @Column("integer", { name: "MaxSystem", nullable: true })
  maxSystem: number | null;

  @Column("integer", { name: "MapSize", nullable: true })
  mapSize: number | null;

  @Column("integer", { name: "DisplayGrade", nullable: true })
  displayGrade: number | null;

  @Column("integer", { name: "ShowHighlight", nullable: true })
  showHighlight: number | null;

  @Column("integer", { name: "MapRed", nullable: true })
  mapRed: number | null;

  @Column("integer", { name: "MapGreen", nullable: true })
  mapGreen: number | null;

  @Column("integer", { name: "MapBlue", nullable: true })
  mapBlue: number | null;

  @Column("integer", { name: "FleetViewOption", nullable: true })
  fleetViewOption: number | null;

  @Column("integer", { name: "SelectRace", nullable: true })
  selectRace: number | null;

  @Column("numeric", { name: "FleetsVisible", nullable: true })
  fleetsVisible: number | null;

  @Column("integer", { name: "LastMapSystemViewed", nullable: true })
  lastMapSystemViewed: number | null;

  @Column("integer", { name: "chkAllowAny", nullable: true })
  chkAllowAny: number | null;

  @Column("integer", { name: "chkAutoAssign", nullable: true })
  chkAutoAssign: number | null;

  @Column("integer", { name: "chkTons", nullable: true })
  chkTons: number | null;

  @Column("integer", { name: "StandardTour", nullable: true })
  standardTour: number | null;

  @Column("real", { name: "LastAssignment", nullable: true })
  lastAssignment: number | null;

  @Column("integer", { name: "CurrentXenophobia", nullable: true })
  currentXenophobia: number | null;

  @Column("double", { name: "AcademyCrewmen", nullable: true })
  academyCrewmen: number | null;

  @Column("integer", { name: "MaintenanceCapacity", nullable: true })
  maintenanceCapacity: number | null;

  @Column("real", { name: "OrdnanceCapacity", nullable: true })
  ordnanceCapacity: number | null;

  @Column("real", { name: "FighterCapacity", nullable: true })
  fighterCapacity: number | null;

  @Column("real", { name: "ShipBuilding", nullable: true })
  shipBuilding: number | null;

  @Column("real", { name: "FuelProduction", nullable: true })
  fuelProduction: number | null;

  @Column("real", { name: "ConstructionProduction", nullable: true })
  constructionProduction: number | null;

  @Column("real", { name: "OrdnanceProduction", nullable: true })
  ordnanceProduction: number | null;

  @Column("real", { name: "FighterProduction", nullable: true })
  fighterProduction: number | null;

  @Column("real", { name: "MineProduction", nullable: true })
  mineProduction: number | null;

  @Column("integer", { name: "Research", nullable: true })
  research: number | null;

  @Column("integer", { name: "PlanetarySensorStrength", nullable: true })
  planetarySensorStrength: number | null;

  @Column("integer", { name: "TrainingLevel", nullable: true })
  trainingLevel: number | null;

  @Column("integer", { name: "GUStrength", nullable: true })
  guStrength: number | null;

  @Column("integer", { name: "GUTrained", nullable: true })
  guTrained: number | null;

  @Column("real", { name: "TerraformingRate", nullable: true })
  terraformingRate: number | null;

  @Column("real", { name: "ColonizationSkill", nullable: true })
  colonizationSkill: number | null;

  @Column("integer", { name: "StartTechPoints", nullable: true })
  startTechPoints: number | null;

  @Column("integer", { name: "StartBuildPoints", nullable: true })
  startBuildPoints: number | null;

  @Column("real", { name: "WealthCreationRate", nullable: true })
  wealthCreationRate: number | null;

  @Column("real", { name: "EconomicProdModifier", nullable: true })
  economicProdModifier: number | null;

  @Column("real", { name: "ShipyardOperations", nullable: true })
  shipyardOperations: number | null;

  @Column("integer", { name: "MSPProduction", nullable: true })
  mspProduction: number | null;

  @Column("integer", { name: "MaxRefuellingRate", nullable: true })
  maxRefuellingRate: number | null;

  @Column("double", {
    name: "UnderwayReplenishmentRate",
    nullable: true,
    default: () => "0",
  })
  underwayReplenishmentRate: number | null;

  @Column("integer", { name: "Hostile", nullable: true })
  hostile: number | null;

  @Column("integer", { name: "Neutral", nullable: true })
  neutral: number | null;

  @Column("integer", { name: "Friendly", nullable: true })
  friendly: number | null;

  @Column("integer", { name: "Allied", nullable: true })
  allied: number | null;

  @Column("integer", { name: "Civilian", nullable: true })
  civilian: number | null;

  @Column("integer", { name: "DisplayFunction", nullable: true })
  displayFunction: number | null;

  @Column("integer", { name: "chkPlanets", nullable: true })
  chkPlanets: number | null;

  @Column("integer", { name: "chkDwarf", nullable: true })
  chkDwarf: number | null;

  @Column("integer", { name: "chkMoons", nullable: true })
  chkMoons: number | null;

  @Column("integer", { name: "chkAst", nullable: true })
  chkAst: number | null;

  @Column("integer", { name: "chkWP", nullable: true })
  chkWp: number | null;

  @Column("integer", { name: "chkStarOrbits", nullable: true })
  chkStarOrbits: number | null;

  @Column("integer", { name: "chkPlanetOrbits", nullable: true })
  chkPlanetOrbits: number | null;

  @Column("integer", { name: "chkDwarfOrbits", nullable: true })
  chkDwarfOrbits: number | null;

  @Column("integer", { name: "chkMoonOrbits", nullable: true })
  chkMoonOrbits: number | null;

  @Column("integer", { name: "chkAsteroidOrbits", nullable: true })
  chkAsteroidOrbits: number | null;

  @Column("integer", { name: "chkStarNames", nullable: true })
  chkStarNames: number | null;

  @Column("integer", { name: "chkPlanetNames", nullable: true })
  chkPlanetNames: number | null;

  @Column("integer", { name: "chkDwarfNames", nullable: true })
  chkDwarfNames: number | null;

  @Column("integer", { name: "chkMoonNames", nullable: true })
  chkMoonNames: number | null;

  @Column("integer", { name: "chkAstNames", nullable: true })
  chkAstNames: number | null;

  @Column("integer", { name: "chkFleets", nullable: true })
  chkFleets: number | null;

  @Column("integer", { name: "chkMoveTail", nullable: true })
  chkMoveTail: number | null;

  @Column("integer", { name: "chkColonies", nullable: true })
  chkColonies: number | null;

  @Column("integer", { name: "chkCentre", nullable: true })
  chkCentre: number | null;

  @Column("integer", { name: "chkSL", nullable: true })
  chkSl: number | null;

  @Column("integer", { name: "chkWaypoint", nullable: true })
  chkWaypoint: number | null;

  @Column("integer", { name: "chkOrder", nullable: true })
  chkOrder: number | null;

  @Column("integer", { name: "chkNoOverlap", nullable: true })
  chkNoOverlap: number | null;

  @Column("integer", { name: "chkActiveSensors", nullable: true })
  chkActiveSensors: number | null;

  @Column("integer", { name: "chkTracking", nullable: true })
  chkTracking: number | null;

  @Column("integer", { name: "chkActiveOnly", nullable: true })
  chkActiveOnly: number | null;

  @Column("integer", { name: "chkShowDist", nullable: true })
  chkShowDist: number | null;

  @Column("integer", { name: "chkSBSurvey", nullable: true })
  chkSbSurvey: number | null;

  @Column("integer", { name: "chkMinerals", nullable: true })
  chkMinerals: number | null;

  @Column("integer", { name: "chkCometPath", nullable: true })
  chkCometPath: number | null;

  @Column("integer", { name: "chkAstColOnly", nullable: true })
  chkAstColOnly: number | null;

  @Column("integer", { name: "chkAstMinOnly", nullable: true })
  chkAstMinOnly: number | null;

  @Column("integer", { name: "chkTAD", nullable: true })
  chkTad: number | null;

  @Column("integer", { name: "chkFiringRanges", nullable: true })
  chkFiringRanges: number | null;

  @Column("integer", { name: "chkSalvoOrigin", nullable: true })
  chkSalvoOrigin: number | null;

  @Column("integer", { name: "chkSalvoTarget", nullable: true })
  chkSalvoTarget: number | null;

  @Column("integer", { name: "chkEscorts", nullable: true })
  chkEscorts: number | null;

  @Column("integer", { name: "chkFireControlRange", nullable: true })
  chkFireControlRange: number | null;

  @Column("integer", { name: "PassiveSensor", nullable: true })
  passiveSensor: number | null;

  @Column("integer", { name: "ActiveSensor", nullable: true })
  activeSensor: number | null;

  @Column("integer", { name: "DetRange", nullable: true })
  detRange: number | null;

  @Column("integer", { name: "chkHideIDs", nullable: true })
  chkHideIDs: number | null;

  @Column("integer", { name: "chkHideSL", nullable: true })
  chkHideSl: number | null;

  @Column("integer", { name: "chkEvents", nullable: true })
  chkEvents: number | null;

  @Column("integer", { name: "chkPackets", nullable: true })
  chkPackets: number | null;

  @Column("integer", { name: "chkMPC", nullable: true })
  chkMpc: number | null;

  @Column("integer", { name: "chkLifepods", nullable: true })
  chkLifepods: number | null;

  @Column("integer", { name: "chkWrecks", nullable: true })
  chkWrecks: number | null;

  @Column("integer", { name: "chkHostileSensors", nullable: true })
  chkHostileSensors: number | null;

  @Column("integer", { name: "chkGeoPoints", nullable: true })
  chkGeoPoints: number | null;

  @Column("integer", { name: "chkBearing", nullable: true })
  chkBearing: number | null;

  @Column("integer", { name: "chkCoordinates", nullable: true })
  chkCoordinates: number | null;

  @Column("integer", { name: "chkLostContacts", nullable: true })
  chkLostContacts: number | null;

  @Column("integer", { name: "chkHideCivNames", nullable: true })
  chkHideCivNames: number | null;

  @Column("integer", { name: "chkSystemOnly", nullable: true })
  chkSystemOnly: number | null;

  @Column("integer", { name: "chkShowCivilianOOB", nullable: true })
  chkShowCivilianOob: number | null;

  @Column("integer", { name: "chkHostile", nullable: true })
  chkHostile: number | null;

  @Column("integer", { name: "chkFriendly", nullable: true })
  chkFriendly: number | null;

  @Column("integer", { name: "chkAllied", nullable: true })
  chkAllied: number | null;

  @Column("integer", { name: "chkNeutral", nullable: true })
  chkNeutral: number | null;

  @Column("integer", { name: "chkCivilian", nullable: true })
  chkCivilian: number | null;

  @Column("integer", { name: "chkContactsCurrentSystem", nullable: true })
  chkContactsCurrentSystem: number | null;

  @Column("integer", { name: "chkTranspondersOn", nullable: true })
  chkTranspondersOn: number | null;

  @Column("text", { name: "RankScientist", nullable: true })
  rankScientist: string | null;

  @Column("text", { name: "RankAdministrator", nullable: true })
  rankAdministrator: string | null;

  @Column("integer", { name: "chkUnexJP", nullable: true, default: () => "1" })
  chkUnexJp: number | null;

  @Column("integer", {
    name: "chkJPSurveyStatus",
    nullable: true,
    default: () => "0",
  })
  chkJpSurveyStatus: number | null;

  @Column("integer", {
    name: "chkSurveyLocationPoints",
    nullable: true,
    default: () => "0",
  })
  chkSurveyLocationPoints: number | null;

  @Column("integer", {
    name: "chkSurveyedSystemBodies",
    nullable: true,
    default: () => "0",
  })
  chkSurveyedSystemBodies: number | null;

  @Column("integer", {
    name: "chkDistanceFromSelected",
    nullable: true,
    default: () => "0",
  })
  chkDistanceFromSelected: number | null;

  @Column("integer", {
    name: "chkWarshipLocation",
    nullable: true,
    default: () => "1",
  })
  chkWarshipLocation: number | null;

  @Column("integer", {
    name: "chkAllFleetLocations",
    nullable: true,
    default: () => "0",
  })
  chkAllFleetLocations: number | null;

  @Column("integer", {
    name: "chkKnownAlienForces",
    nullable: true,
    default: () => "1",
  })
  chkKnownAlienForces: number | null;

  @Column("integer", {
    name: "chkAlienControlledSystems",
    nullable: true,
    default: () => "1",
  })
  chkAlienControlledSystems: number | null;

  @Column("integer", {
    name: "chkPopulatedSystem",
    nullable: true,
    default: () => "1",
  })
  chkPopulatedSystem: number | null;

  @Column("integer", {
    name: "chkShipyardComplexes",
    nullable: true,
    default: () => "1",
  })
  chkShipyardComplexes: number | null;

  @Column("integer", {
    name: "chkNavalHeadquarters",
    nullable: true,
    default: () => "1",
  })
  chkNavalHeadquarters: number | null;

  @Column("integer", { name: "chkSectors", nullable: true, default: () => "0" })
  chkSectors: number | null;

  @Column("integer", {
    name: "chkPossibleDormantJP",
    nullable: true,
    default: () => "1",
  })
  chkPossibleDormantJp: number | null;

  @Column("integer", {
    name: "chkSecurityStatus",
    nullable: true,
    default: () => "0",
  })
  chkSecurityStatus: number | null;

  @Column("integer", {
    name: "chkDiscoveryDate",
    nullable: true,
    default: () => "0",
  })
  chkDiscoveryDate: number | null;

  @Column("integer", {
    name: "chkHabRangeWorlds",
    nullable: true,
    default: () => "1",
  })
  chkHabRangeWorlds: number | null;

  @Column("integer", {
    name: "chkLowCCNormalG",
    nullable: true,
    default: () => "1",
  })
  chkLowCcNormalG: number | null;

  @Column("integer", {
    name: "chkMediumCCNormalG",
    nullable: true,
    default: () => "1",
  })
  chkMediumCcNormalG: number | null;

  @Column("integer", {
    name: "chkLowCCLowG",
    nullable: true,
    default: () => "0",
  })
  chkLowCcLowG: number | null;

  @Column("integer", {
    name: "chkMediumCCLowG",
    nullable: true,
    default: () => "0",
  })
  chkMediumCcLowG: number | null;

  @Column("text", { name: "SpaceStationPic", nullable: true })
  spaceStationPic: string | null;

  @Column("integer", {
    name: "MaxOrdnanceTransferRate",
    nullable: true,
    default: () => "40",
  })
  maxOrdnanceTransferRate: number | null;

  @Column("integer", {
    name: "CargoShuttleLoadModifier",
    nullable: true,
    default: () => "1",
  })
  cargoShuttleLoadModifier: number | null;

  @Column("integer", {
    name: "GroundFormationConstructionRate",
    nullable: true,
    default: () => "100",
  })
  groundFormationConstructionRate: number | null;

  @Column("integer", {
    name: "DesignThemeID",
    nullable: true,
    default: () => "1",
  })
  designThemeId: number | null;

  @Column("integer", {
    name: "ResearchTargetCost",
    nullable: true,
    default: () => "0",
  })
  researchTargetCost: number | null;

  @Column("integer", {
    name: "CurrentResearchTotal",
    nullable: true,
    default: () => "0",
  })
  currentResearchTotal: number | null;

  @Column("integer", { name: "chkPassive10", nullable: true })
  chkPassive10: number | null;

  @Column("integer", {
    name: "chkPassive100",
    nullable: true,
    default: () => "0",
  })
  chkPassive100: number | null;

  @Column("integer", {
    name: "chkPassive1000",
    nullable: true,
    default: () => "0",
  })
  chkPassive1000: number | null;

  @Column("integer", {
    name: "GroundThemeID",
    nullable: true,
    default: () => "0",
  })
  groundThemeId: number | null;

  @Column("integer", {
    name: "MaximumOrbitalMiningDiameter",
    nullable: true,
    default: () => "100",
  })
  maximumOrbitalMiningDiameter: number | null;

  @Column("integer", {
    name: "ColonyDensity",
    nullable: true,
    default: () => "5",
  })
  colonyDensity: number | null;

  @Column("integer", {
    name: "MissileThemeID",
    nullable: true,
    default: () => "0",
  })
  missileThemeId: number | null;

  @Column("boolean", {
    name: "NeutralRace",
    nullable: true,
    default: () => "0",
  })
  neutralRace: boolean | null;

  @Column("integer", {
    name: "chkNumCometsPlanetlessSystem",
    nullable: true,
    default: () => "0",
  })
  chkNumCometsPlanetlessSystem: number | null;

  @Column("integer", {
    name: "chkPassive10000",
    nullable: true,
    default: () => "0",
  })
  chkPassive10000: number | null;

  @Column("integer", {
    name: "chkGroundSurveyLocations",
    nullable: true,
    default: () => "0",
  })
  chkGroundSurveyLocations: number | null;

  @Column("integer", { name: "chkML", nullable: true, default: () => "0" })
  chkMl: number | null;

  @Column("integer", { name: "chkBlocked", nullable: true, default: () => "0" })
  chkBlocked: number | null;

  @Column("integer", {
    name: "chkMilitaryRestricted",
    nullable: true,
    default: () => "0",
  })
  chkMilitaryRestricted: number | null;

  @Column("boolean", {
    name: "HideCMCPop",
    nullable: true,
    default: () => "FALSE",
  })
  hideCmcPop: boolean | null;

  @Column("boolean", {
    name: "ShowPopStar",
    nullable: true,
    default: () => "FALSE",
  })
  showPopStar: boolean | null;

  @Column("boolean", {
    name: "ShowPopSystemBody",
    nullable: true,
    default: () => "FALSE",
  })
  showPopSystemBody: boolean | null;

  @Column("boolean", {
    name: "PopByFunction",
    nullable: true,
    default: () => "FALSE",
  })
  popByFunction: boolean | null;

  @Column("integer", {
    name: "chkLostContactsOneYear",
    nullable: true,
    default: () => "0",
  })
  chkLostContactsOneYear: number | null;

  @Column("integer", {
    name: "chkDisplayMineralSearch",
    nullable: true,
    default: () => "0",
  })
  chkDisplayMineralSearch: number | null;

  @Column("integer", {
    name: "chkLostContactsOneDay",
    nullable: true,
    default: () => "0",
  })
  chkLostContactsOneDay: number | null;

  @Column("integer", {
    name: "chkHabRangeWorldsLowG",
    nullable: true,
    default: () => "0",
  })
  chkHabRangeWorldsLowG: number | null;

  @Column("integer", { name: "chkAllRace", nullable: true, default: () => "0" })
  chkAllRace: number | null;

  @Column("integer", {
    name: "chkDisplayAllForms",
    nullable: true,
    default: () => "0",
  })
  chkDisplayAllForms: number | null;

  @Column("double", { name: "TonnageSent", nullable: true, default: () => "0" })
  tonnageSent: number | null;

  @Column("integer", {
    name: "LastProgressionOrder",
    nullable: true,
    default: () => "0",
  })
  lastProgressionOrder: number | null;

  @Column("integer", {
    name: "chkHideOrbitFleets",
    nullable: true,
    default: () => "0",
  })
  chkHideOrbitFleets: number | null;

  @Column("integer", {
    name: "chkEventsAllRaces",
    nullable: true,
    default: () => "0",
  })
  chkEventsAllRaces: number | null;

  @Column("integer", {
    name: "chkUseMaxCCDisplay",
    nullable: true,
    default: () => "0",
  })
  chkUseMaxCcDisplay: number | null;

  @Column("integer", {
    name: "chkSelectedOrbit",
    nullable: true,
    default: () => "0",
  })
  chkSelectedOrbit: number | null;

  @Column("integer", {
    name: "chkMilitaryRestrictedJP",
    nullable: true,
    default: () => "0",
  })
  chkMilitaryRestrictedJp: number | null;

  @Column("integer", {
    name: "chkDistanceFromSelectedMR",
    nullable: true,
    default: () => "0",
  })
  chkDistanceFromSelectedMr: number | null;

  @Column("integer", {
    name: "chkUseHullNumbers",
    nullable: true,
    default: () => "1",
  })
  chkUseHullNumbers: number | null;

  @Column("integer", {
    name: "chkDistanceRealSpace",
    nullable: true,
    default: () => "0",
  })
  chkDistanceRealSpace: number | null;

  @Column("integer", {
    name: "chkSupernovaImpactTime",
    nullable: true,
    default: () => "0",
  })
  chkSupernovaImpactTime: number | null;

  @Column("integer", { name: "UseRoman", nullable: true, default: () => "0" })
  useRoman: number | null;

  @Column("integer", {
    name: "chkAetherRift",
    nullable: true,
    default: () => "0",
  })
  chkAetherRift: number | null;

  @Column("integer", {
    name: "chkNumWrecks",
    nullable: true,
    default: () => "0",
  })
  chkNumWrecks: number | null;

  @Column("double", {
    name: "GeneticConversionRate",
    nullable: true,
    default: () => "0.5",
  })
  geneticConversionRate: number | null;

  @Column("integer", {
    name: "chkHideWreckIDs",
    nullable: true,
    default: () => "0",
  })
  chkHideWreckIDs: number | null;

  @Column("integer", {
    name: "MaxOrganizationLinkID",
    nullable: true,
    default: () => "0",
  })
  maxOrganizationLinkId: number | null;
}
