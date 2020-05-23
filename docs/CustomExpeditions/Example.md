# Example

## Commented version

This version is used to explain how the configuration works. Do not try to copy and
import this, as comments are not valid in **JSON**. Use the uncommented version below instead.

```json
{
  "name": "Example Expedition Full", // Name of the expedition which will be used by default on import
  "bigPocketVariantConfig": false, // determines if bigpocket mode is on or not
  "sequenceConfig": {
    // this defines the sequencing flow of the expedition
    "firstBranchId": "TheLanding", // Defines the entrypoint of the expedition
    "branches": {
      "TheLanding": {
        // Unique Id of the branch
        "type": "narrative", // type of the branch, has to be either "narrative", "battle" or "reward"
        "config": {
          // configuration of the branch (in this case "narrative")
          "text": "The four mages landed ashore...", // narrative text which will be displayed
          "decisions": [
            // list of decisions, these will be shown as buttons
            "Next"
          ]
        },
        "nextBranchId": [
          // list of decision outcomes -> the position of an "id" has to match the position in "decisions" of its respective "decision"
          "FirstBattle"
        ]
      },
      "FirstBattle": {
        "type": "battle",
        "config": {
          // battle configuration
          "tier": 1, // tier which will be used for upgraded basic nemesis card generation and nemesis rolling
          "nemesisId": "CarapaceQueen", // specific nemesis id -> this will be taken instead of randomly rolled one
          "newUBNCards": {
            // new upgraded basic nemesis cards to add
            "type": "regular",
            "addRandom": true
          },
          "specialRules": "You may not talk", // special rules which will be displayed
          "treasure": {
            // treasure which will be rolled upon completion of the battle
            "level": 1, // level of the treasure to be rolled
            "hasTreasure": true // determines if treasure should be rolled
          }
        },
        "nextBranchId": "SecondBattle" // id of the next branch in the sequence
      },
      "SecondBattle": {
        "type": "battle",
        "config": {
          "tier": 2,
          "onLoss": "skip", // battle can't be repeated
          "lossRewards": [
            // list of custom rewards for each time the player looses
            {
              "type": "custom",
              "treasure": {
                "ids": []
              },
              "mage": {
                "ids": ["Lost"]
              },
              "supply": {
                "ids": []
              }
            }
          ],
          "winRewards": {
            // custom rewards for when the player wins
            "type": "custom",
            "treasure": {
              "ids": [
                {
                  "random": true,
                  "level": 1
                }
              ]
            },
            "mage": {
              "ids": [
                "Soskel",
                {
                  "random": true
                }
              ]
            },
            "supply": {
              "ids": ["Jade"],
              "bigPocket": true
            }
          },
          "newUBNCards": {
            "ids": ["Wreck"],
            "type": "custom"
          },
          "treasure": {
            "level": 2,
            "hasTreasure": true
          }
        },
        "nextBranchId": "BattleThree"
      },
      "BattleThree": {
        "type": "battle",
        "config": {
          "tier": 1,
          "nemesisId": "Rageborne",
          "newUBNCards": {
            "type": "regular",
            "addRandom": false
          },
          "treasure": {
            "hasTreasure": false
          }
        },
        "nextBranchId": "TreasureAhead"
      },
      "TreasureAhead": {
        "type": "reward", // reward branch
        "config": {
          "type": "custom", // has to be 'custom' for reward branches!
          "supply": {
            "ids": [
              // list of ids which are added, can either be actual content ids or blueprints
              "ArcaneNexus", // actual id - this card will be added
              {
                // this will roll another gem with cost higher than 5
                "type": "Gem",
                "operation": ">=",
                "threshold": 5
              }
            ]
          },
          "mage": {
            "ids": [
              // list of ids or instructions to roll random ids
              "Claudia", // actual id which will be added
              {
                // additional random mage id to be added
                "random": true
              }
            ]
          },
          "treasure": {
            "ids": [
              // list of ids or instructions to roll random treasure
              "PurifiedBangle", // actual id which will be added
              {
                // additional random treasure of level 2 which will be rolled
                "random": true,
                "level": 2
              }
            ]
          }
        },
        "nextBranchId": "ChooseEnding"
      },
      "ChooseEnding": {
        "type": "narrative",
        "config": {
          "text": "That's it, and now what?",
          "decisions": ["Leave the island", "Stay and build a home"]
        },
        "nextBranchId": ["Leave", "Stay"]
      },
      "Leave": {
        "type": "narrative",
        "config": {
          "text": "Bye bye",
          "decisions": false
        } // NOTE: no additional nextBranchId means, the expedition will be over after this branch
      },
      "Stay": {
        "type": "narrative",
        "config": {
          "text": "Make yourself comfy",
          "decisions": false
        } // NOTE: no additional nextBranchId means, the expedition will be over after this branch
      }
    }
  },
  "initialBarracksConfig": {
    "mageIds": [
      // if specified these will be used, no other mages will be rolled (you can specify more or less than four mages)
      "Adelheim",
      "Jian",
      "Brama",
      "Kadir"
    ],
    "supplyIds": [
      // if specified these will be used, no other supply cards will be rolled (free amount of ids)
    ],
    "treasureIds": [
      // if specified these will be used, no other treasure cards will be rolled (free amount of ids)
    ]
  },
  "settingsSnapshotConfig": {
    // this configuration determines which content will be used, whenever something is randomly rolled during the expedition
    "supplySetup": {
      // supply setup which is used to roll the initial supply
      "id": "random",
      "name": "Random Setup (Default)",
      "type": "official",
      "default": true,
      "active": true,
      "tiles": [
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Relic",
          "operation": "ANY"
        },
        {
          "type": "Relic",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        }
      ]
    },
    "availableCardIds": [
      "DiamondCluster",
      "ChaosArc",
      "Ignite",
      "EssenceTheft",
      "SearingRuby",
      "FeralLightning",
      "PlanarInsight",
      "SpectralEcho",
      "BurningOpal",
      "ConsumingVoid",
      "UnstablePrism",
      "CloudedSapphire",
      "MagesTalisman",
      "FlexingDagger",
      "LavaTendril",
      "BottledVortex",
      "ArcaneNexus",
      "DarkFire",
      "PhoenixFlame",
      "Jade",
      "AmplifyVision",
      "VriswoodAmber",
      "BlastingStaff",
      "SiftersPearl",
      "WildfireWhip",
      "FocusingOrb",
      "OblivionSwell",
      "TripliteCore",
      "NerveJab",
      "DoubleTap",
      "ObliviumResin",
      "Summonite",
      "ManifoldContainer",
      "DrainingTouch",
      "JoltingCrust",
      "MentiteChunk",
      "SoulCords",
      "VoidiumSpike",
      "PrecisionShot",
      "MutedLacosite",
      "BladeOfWisdom",
      "StunningForce",
      "FlashOfIntellect",
      "ScholarsOpus",
      "BottledStar",
      "BurningCurrent",
      "PsychicEruption",
      "LivingGauntlet",
      "ShiningTetrite",
      "VoidBond",
      "Combustion",
      "VimDynamo",
      "DisintegratingScythe",
      "MonstrousInferno",
      "DevouringShadow",
      "BanishingTopaz",
      "Transmogrifier",
      "JeweledBrain",
      "BlastSphere",
      "WoundMender",
      "LurkingSionite",
      "UnrefinedBlaststone",
      "Exogranite",
      "RecurringJasper",
      "EnergizedRubidium",
      "ResonantPearl",
      "CagedFire",
      "GalvanizedBauble",
      "AetherConduit",
      "WellOfEnergy",
      "PainConduit",
      "LinkConduit",
      "MarbleGalaxy",
      "DelugeOfPower",
      "ReverberatingShock",
      "FatalHarmony",
      "BouncingBoom",
      "SpiritLift",
      "Tethered Darts",
      "ForceAmplifier",
      "ImbuedSmash",
      "PatternStrike",
      "MoltenHammer",
      "Radiance",
      "Blaze",
      "ScryingBolt",
      "SagesBrand",
      "LeechingAgate",
      "TemporalHelix",
      "Char",
      "AlienElement",
      "Scorch",
      "Pyromancy",
      "FeedbackAura",
      "Catalyst",
      "PainStone",
      "AstralCube",
      "RiddleSphere",
      "NetherConduit",
      "HauntedBerylite",
      "Olivinite",
      "CacheGlass",
      "ReflectiveConduit",
      "WillWeaver",
      "BreachSeeker",
      "CrescendoRay",
      "StormVapors",
      "MantraOfStrength",
      "EmbodyFlame",
      "SnapRitual",
      "ShiningFluorite",
      "PolyphaseTurbine",
      "BreachExtractor",
      "FocusingConduit",
      "DualFlash",
      "DustCaller",
      "SymbioticSynapse",
      "FossilizedScarab",
      "ThermalDart",
      "Resonate",
      "Conflagration",
      "DimensionalKey",
      "InnerFire",
      "Fulminate",
      "EternityCharm",
      "ErraticIngot",
      "ReduceToAsh",
      "VortexGauntlet",
      "Carbonize",
      "Equilibrium",
      "VolcanicGlass",
      "ConvectionField",
      "JaggedLightning",
      "BloodstoneJewel",
      "Kindle",
      "ThoughtformFamiliar",
      "Crystallize",
      "FieryTorrent",
      "CelestialSpire",
      "ConjureTheLost",
      "NovaForge",
      "DreadDiamond",
      "CairnCompass",
      "ScoriaSlag",
      "BreachOre",
      "FiendCatcher",
      "PyrotechnicSurge",
      "Aurora",
      "ConclaveScroll",
      "PrimordialFetish",
      "FrozenMagmite",
      "MagesTotem",
      "DrownInFlames",
      "FleetingVision",
      "SplinterMissile",
      "EchoStone",
      "ThievingSpirit",
      "FracturedQuartz",
      "RockLauncher",
      "AbacusOfIgnition",
      "IlluminatingFlame",
      "ChronalArc"
    ],
    "availableMageIds": [
      "Adelheim",
      "Brama",
      "Jian",
      "Kadir",
      "Lash",
      "Mist",
      "Phaedraxa",
      "Xaxos",
      "Nym",
      "Reeve",
      "Zhana",
      "Inco",
      "Razra",
      "Sahala",
      "Gygar",
      "Soskel",
      "Taqren",
      "Talix",
      "Rhia",
      "Claudia",
      "Lost",
      "Malastar",
      "Indira",
      "Remnant",
      "Nook",
      "Mazra",
      "Qu",
      "Sparrow",
      "XaxosTV",
      "Dezmodia",
      "Garu",
      "Gex",
      "Mazahaedron",
      "MistWE",
      "Quilius",
      "Ulgimor",
      "YanMagda"
    ],
    "availableNemesisIds": [
      "CarapaceQueen",
      "CrookedMask",
      "PrinceOfGluttons",
      "Rageborne",
      "HordeCrone",
      "Necroswarm",
      "Maggoth",
      "Arachnos",
      "AgelessWalker",
      "Fenrix",
      "BlightLord",
      "WaywardOne",
      "ThriceDeadProphet",
      "Wraithmonger",
      "TheWailing",
      "TheWanderer",
      "KnightOfShackles",
      "MaidenOfThorns",
      "GateWitch",
      "HollowCrown",
      "MagusOfCloaks",
      "UmbraTitan"
    ],
    "availableTreasureIds": [
      "DezmodiasOblivionShard",
      "UlgimorsCoalFragment",
      "IndirasLoneOpal",
      "MistsAmethystParagon",
      "MalastarsImmolate",
      "YanMagdasIlluminate",
      "EyeOfTheMaelstrom",
      "WellOfDespair",
      "CronesAmulet",
      "EdibleFungusChunks",
      "UmbralHornOfWar",
      "TheBrokenMask",
      "AlchemistsAlembic",
      "SoothsayersPouch",
      "SuppressingPin",
      "Quicksilver",
      "BandOfRetrieval",
      "PurifiedBangle",
      "KadirsEmeraldShard",
      "GexsShatteredGeode",
      "JiansMoonstoneShard",
      "LashsQuartzShard",
      "XaxosFlare",
      "AdelheimsAmethystShard",
      "BramasBuriedLight",
      "GarusTorch",
      "XaxosPyre",
      "MistsGarnetShard",
      "ShimmeringCloakOfTheMagus",
      "ImbuedShackles",
      "GluttonsTooth",
      "CoreOfRage",
      "CleansingAmulet",
      "CarapaceFragement",
      "ThornedWhip",
      "BonesOfDeathmind",
      "AcceleratingGauntlets",
      "EssenceExtractor",
      "BroochOfAttunment",
      "BladedCrystal",
      "PrismOfDestruction",
      "ForgottenTrinket",
      "PrecisionMagnifier",
      "ShroudOfObfucation",
      "VerdantStaff",
      "FlowingMantle",
      "MazahaedronsWorldheartShard",
      "PhaedraxasTourmalineShard",
      "FracturedShell",
      "Extra-DimensionalLens",
      "SeersBracer",
      "RemnantsVoidShard",
      "QuiliussErasure",
      "ZhanasFleetingEmber",
      "BlightedRootClump",
      "PetrifiedWitchFinger",
      "WaywardScraps",
      "TrueSightMonocle",
      "EntwinedAetherStrands",
      "SiphoningBlade",
      "GemEncrustedAnklet",
      "ReevesRavenShard",
      "NymsVision",
      "SparrowsAid",
      "WraithsEssence",
      "VolatileClasp",
      "BreachStabilizer",
      "FangedChoker",
      "EndlessBandolier"
    ],
    "availableUpgradedBasicNemesisCardIds": [
      "HissingAcid",
      "Wreck",
      "BaneCommander",
      "SkyTremor",
      "EngulfingMadness",
      "Separate",
      "NeedleDoom",
      "Marked",
      "Eradicate",
      "FlashOfDecay",
      "Terrify",
      "RayOfDesolation",
      "ThunderousTempest",
      "Sacrifice",
      "Burialskulk",
      "Rupture",
      "FurrowOfDestruction",
      "Mangle",
      "HowlingSlayer"
    ]
  }
}
```

## Uncommented version

Use this if you want to try this expedition out and import it into the randomizer.

```json
{
  "name": "Example Expedition Full",
  "bigPocketVariantConfig": false,
  "sequenceConfig": {
    "firstBranchId": "TheLanding",
    "branches": {
      "TheLanding": {
        "type": "narrative",
        "config": {
          "text": "The four mages landed ashore...",
          "decisions": ["Next"]
        },
        "nextBranchId": ["FirstBattle"]
      },
      "FirstBattle": {
        "type": "battle",
        "config": {
          "tier": 1,
          "nemesisId": "CarapaceQueen",
          "newUBNCards": {
            "type": "regular",
            "addRandom": true
          },
          "specialRules": "You may not talk",
          "treasure": {
            "level": 1,
            "hasTreasure": true
          }
        },
        "nextBranchId": "SecondBattle"
      },
      "SecondBattle": {
        "type": "battle",
        "config": {
          "tier": 2,
          "onLoss": "skip",
          "lossRewards": [
            {
              "type": "custom",
              "treasure": {
                "ids": []
              },
              "mage": {
                "ids": ["Lost"]
              },
              "supply": {
                "ids": []
              }
            }
          ],
          "winRewards": {
            "type": "custom",
            "treasure": {
              "ids": [
                {
                  "random": true,
                  "level": 1
                }
              ]
            },
            "mage": {
              "ids": [
                "Soskel",
                {
                  "random": true
                }
              ]
            },
            "supply": {
              "ids": ["Jade"],
              "bigPocket": true
            }
          },
          "newUBNCards": {
            "type": "custom",
            "ids": ["Wreck"]
          },
          "treasure": {
            "level": 2,
            "hasTreasure": true
          }
        },
        "nextBranchId": "BattleThree"
      },
      "BattleThree": {
        "type": "battle",
        "config": {
          "tier": 1,
          "nemesisId": "Rageborne",
          "newUBNCards": {
            "type": "regular",
            "addRandom": false
          },
          "treasure": {
            "hasTreasure": false
          }
        },
        "nextBranchId": "TreasureAhead"
      },
      "TreasureAhead": {
        "type": "reward",
        "config": {
          "type": "custom",
          "supply": {
            "ids": [
              "ArcaneNexus",
              {
                "type": "Gem",
                "operation": ">=",
                "threshold": 5
              }
            ]
          },
          "mage": {
            "ids": [
              "Claudia",
              {
                "random": true
              }
            ]
          },
          "treasure": {
            "ids": [
              "PurifiedBangle",
              {
                "random": true,
                "level": 2
              }
            ]
          }
        },
        "nextBranchId": "ChooseEnding"
      },
      "ChooseEnding": {
        "type": "narrative",
        "config": {
          "text": "That's it, and now what?",
          "decisions": ["Leave the island", "Stay and build a home"]
        },
        "nextBranchId": ["Leave", "Stay"]
      },
      "Leave": {
        "type": "narrative",
        "config": {
          "text": "Bye bye",
          "decisions": false
        }
      },
      "Stay": {
        "type": "narrative",
        "config": {
          "text": "Make yourself comfy",
          "decisions": false
        }
      }
    }
  },
  "initialBarracksConfig": {
    "mageIds": ["Adelheim", "Jian", "Brama", "Kadir"],
    "supplyIds": [],
    "treasureIds": []
  },
  "settingsSnapshotConfig": {
    "supplySetup": {
      "id": "random",
      "name": "Random Setup (Default)",
      "type": "official",
      "default": true,
      "active": true,
      "tiles": [
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Gem",
          "operation": "ANY"
        },
        {
          "type": "Relic",
          "operation": "ANY"
        },
        {
          "type": "Relic",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        },
        {
          "type": "Spell",
          "operation": "ANY"
        }
      ]
    },
    "availableCardIds": [
      "DiamondCluster",
      "ChaosArc",
      "Ignite",
      "EssenceTheft",
      "SearingRuby",
      "FeralLightning",
      "PlanarInsight",
      "SpectralEcho",
      "BurningOpal",
      "ConsumingVoid",
      "UnstablePrism",
      "CloudedSapphire",
      "MagesTalisman",
      "FlexingDagger",
      "LavaTendril",
      "BottledVortex",
      "ArcaneNexus",
      "DarkFire",
      "PhoenixFlame",
      "Jade",
      "AmplifyVision",
      "VriswoodAmber",
      "BlastingStaff",
      "SiftersPearl",
      "WildfireWhip",
      "FocusingOrb",
      "OblivionSwell",
      "TripliteCore",
      "NerveJab",
      "DoubleTap",
      "ObliviumResin",
      "Summonite",
      "ManifoldContainer",
      "DrainingTouch",
      "JoltingCrust",
      "MentiteChunk",
      "SoulCords",
      "VoidiumSpike",
      "PrecisionShot",
      "MutedLacosite",
      "BladeOfWisdom",
      "StunningForce",
      "FlashOfIntellect",
      "ScholarsOpus",
      "BottledStar",
      "BurningCurrent",
      "PsychicEruption",
      "LivingGauntlet",
      "ShiningTetrite",
      "VoidBond",
      "Combustion",
      "VimDynamo",
      "DisintegratingScythe",
      "MonstrousInferno",
      "DevouringShadow",
      "BanishingTopaz",
      "Transmogrifier",
      "JeweledBrain",
      "BlastSphere",
      "WoundMender",
      "LurkingSionite",
      "UnrefinedBlaststone",
      "Exogranite",
      "RecurringJasper",
      "EnergizedRubidium",
      "ResonantPearl",
      "CagedFire",
      "GalvanizedBauble",
      "AetherConduit",
      "WellOfEnergy",
      "PainConduit",
      "LinkConduit",
      "MarbleGalaxy",
      "DelugeOfPower",
      "ReverberatingShock",
      "FatalHarmony",
      "BouncingBoom",
      "SpiritLift",
      "Tethered Darts",
      "ForceAmplifier",
      "ImbuedSmash",
      "PatternStrike",
      "MoltenHammer",
      "Radiance",
      "Blaze",
      "ScryingBolt",
      "SagesBrand",
      "LeechingAgate",
      "TemporalHelix",
      "Char",
      "AlienElement",
      "Scorch",
      "Pyromancy",
      "FeedbackAura",
      "Catalyst",
      "PainStone",
      "AstralCube",
      "RiddleSphere",
      "NetherConduit",
      "HauntedBerylite",
      "Olivinite",
      "CacheGlass",
      "ReflectiveConduit",
      "WillWeaver",
      "BreachSeeker",
      "CrescendoRay",
      "StormVapors",
      "MantraOfStrength",
      "EmbodyFlame",
      "SnapRitual",
      "ShiningFluorite",
      "PolyphaseTurbine",
      "BreachExtractor",
      "FocusingConduit",
      "DualFlash",
      "DustCaller",
      "SymbioticSynapse",
      "FossilizedScarab",
      "ThermalDart",
      "Resonate",
      "Conflagration",
      "DimensionalKey",
      "InnerFire",
      "Fulminate",
      "EternityCharm",
      "ErraticIngot",
      "ReduceToAsh",
      "VortexGauntlet",
      "Carbonize",
      "Equilibrium",
      "VolcanicGlass",
      "ConvectionField",
      "JaggedLightning",
      "BloodstoneJewel",
      "Kindle",
      "ThoughtformFamiliar",
      "Crystallize",
      "FieryTorrent",
      "CelestialSpire",
      "ConjureTheLost",
      "NovaForge",
      "DreadDiamond",
      "CairnCompass",
      "ScoriaSlag",
      "BreachOre",
      "FiendCatcher",
      "PyrotechnicSurge",
      "Aurora",
      "ConclaveScroll",
      "PrimordialFetish",
      "FrozenMagmite",
      "MagesTotem",
      "DrownInFlames",
      "FleetingVision",
      "SplinterMissile",
      "EchoStone",
      "ThievingSpirit",
      "FracturedQuartz",
      "RockLauncher",
      "AbacusOfIgnition",
      "IlluminatingFlame",
      "ChronalArc"
    ],
    "availableMageIds": [
      "Adelheim",
      "Brama",
      "Jian",
      "Kadir",
      "Lash",
      "Mist",
      "Phaedraxa",
      "Xaxos",
      "Nym",
      "Reeve",
      "Zhana",
      "Inco",
      "Razra",
      "Sahala",
      "Gygar",
      "Soskel",
      "Taqren",
      "Talix",
      "Rhia",
      "Claudia",
      "Lost",
      "Malastar",
      "Indira",
      "Remnant",
      "Nook",
      "Mazra",
      "Qu",
      "Sparrow",
      "XaxosTV",
      "Dezmodia",
      "Garu",
      "Gex",
      "Mazahaedron",
      "MistWE",
      "Quilius",
      "Ulgimor",
      "YanMagda"
    ],
    "availableNemesisIds": [
      "CarapaceQueen",
      "CrookedMask",
      "PrinceOfGluttons",
      "Rageborne",
      "HordeCrone",
      "Necroswarm",
      "Maggoth",
      "Arachnos",
      "AgelessWalker",
      "Fenrix",
      "BlightLord",
      "WaywardOne",
      "ThriceDeadProphet",
      "Wraithmonger",
      "TheWailing",
      "TheWanderer",
      "KnightOfShackles",
      "MaidenOfThorns",
      "GateWitch",
      "HollowCrown",
      "MagusOfCloaks",
      "UmbraTitan"
    ],
    "availableTreasureIds": [
      "DezmodiasOblivionShard",
      "UlgimorsCoalFragment",
      "IndirasLoneOpal",
      "MistsAmethystParagon",
      "MalastarsImmolate",
      "YanMagdasIlluminate",
      "EyeOfTheMaelstrom",
      "WellOfDespair",
      "CronesAmulet",
      "EdibleFungusChunks",
      "UmbralHornOfWar",
      "TheBrokenMask",
      "AlchemistsAlembic",
      "SoothsayersPouch",
      "SuppressingPin",
      "Quicksilver",
      "BandOfRetrieval",
      "PurifiedBangle",
      "KadirsEmeraldShard",
      "GexsShatteredGeode",
      "JiansMoonstoneShard",
      "LashsQuartzShard",
      "XaxosFlare",
      "AdelheimsAmethystShard",
      "BramasBuriedLight",
      "GarusTorch",
      "XaxosPyre",
      "MistsGarnetShard",
      "ShimmeringCloakOfTheMagus",
      "ImbuedShackles",
      "GluttonsTooth",
      "CoreOfRage",
      "CleansingAmulet",
      "CarapaceFragement",
      "ThornedWhip",
      "BonesOfDeathmind",
      "AcceleratingGauntlets",
      "EssenceExtractor",
      "BroochOfAttunment",
      "BladedCrystal",
      "PrismOfDestruction",
      "ForgottenTrinket",
      "PrecisionMagnifier",
      "ShroudOfObfucation",
      "VerdantStaff",
      "FlowingMantle",
      "MazahaedronsWorldheartShard",
      "PhaedraxasTourmalineShard",
      "FracturedShell",
      "Extra-DimensionalLens",
      "SeersBracer",
      "RemnantsVoidShard",
      "QuiliussErasure",
      "ZhanasFleetingEmber",
      "BlightedRootClump",
      "PetrifiedWitchFinger",
      "WaywardScraps",
      "TrueSightMonocle",
      "EntwinedAetherStrands",
      "SiphoningBlade",
      "GemEncrustedAnklet",
      "ReevesRavenShard",
      "NymsVision",
      "SparrowsAid",
      "WraithsEssence",
      "VolatileClasp",
      "BreachStabilizer",
      "FangedChoker",
      "EndlessBandolier"
    ],
    "availableUpgradedBasicNemesisCardIds": [
      "HissingAcid",
      "Wreck",
      "BaneCommander",
      "SkyTremor",
      "EngulfingMadness",
      "Separate",
      "NeedleDoom",
      "Marked",
      "Eradicate",
      "FlashOfDecay",
      "Terrify",
      "RayOfDesolation",
      "ThunderousTempest",
      "Sacrifice",
      "Burialskulk",
      "Rupture",
      "FurrowOfDestruction",
      "Mangle",
      "HowlingSlayer"
    ]
  }
}
```
