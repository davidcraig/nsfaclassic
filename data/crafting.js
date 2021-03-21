import { findByName } from './characters'

export const guildCrafting = {
  tailoring: { name: 'Tailoring', crafters: [ findByName() ] },
  blacksmithing: { name: 'Blacksmithing', crafters: [] },
  leatherworking: { name: 'Leatherworking', crafters: [] },

  inscription: { name: 'Inscription', crafters: [] },
  engineering: { name: 'Engineering', crafters: [] },

  alchemy: { name: 'Alchemy', crafters: [] },
  // jewelcrafting: { name: 'Jewelcrafting', crafters: [] },

  enchanting: { name: 'Enchanting', crafters: [] },
}

export const legendaries = {
  tailoring: {
    name: 'Tailoring',
    crafters: [
      {
        crafter: findByName('Sniperdot'),
      }
    ]
  },
  blacksmithing: {
    name: 'Blacksmithing'
  },
  leatherworking: {
    name: 'Leatherworking',
    crafters: [
      {
        crafter: findByName('Tyriant'),
      }
    ]
  },
  // jewelcrafting: {
  //   name: 'Jewelcrafting'
  // }
}

export default {
  guildCrafting
}
