import { findByName } from './characters'
import Tailoring from './shadowlands/crafting/legendaries/tailoring'

export const guildCrafting = {
  tailoring: { name: 'Tailoring', crafters: [ findByName() ] },
  blacksmithing: { name: 'Blacksmithing', crafters: [] },
  leatherworking: { name: 'Leatherworking', crafters: [] },

  inscription: { name: 'Inscription', crafters: [] },
  engineering: { name: 'Engineering', crafters: [] },

  alchemy: { name: 'Alchemy', crafters: [] },
  jewelcrafting: { name: 'Jewelcrafting', crafters: [] },

  enchanting: { name: 'Enchanting', crafters: [] },
}

export const legendaries = {
  tailoring: {
    name: 'Tailoring',
    crafters: [
      {
        crafter: findByName('Snipermagi'),
        legendaries: [
          { legendary: Tailoring.GRIM_VEILED_BELT, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_BRACERS, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_CAPE, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_HOOD, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_MITTENS, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_PANTS, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_SANDALS, rank: 1 },
          { legendary: Tailoring.GRIM_VEILED_SHOULDERS, rank: 1 },
        ]
      }
    ]
  },
  blacksmithing: {
    name: 'Blacksmithing'
  },
  leatherworking: {
    name: 'Leatherworking'
  },
  jewelcrafting: {
    name: 'Jewelcrafting'
  }
}

export default {
  guildCrafting,
  legendaries
}
