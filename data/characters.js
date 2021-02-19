import classes from './wow-classes'

const LEVEL_CAP = 60

const Characters = [
  { name: 'Sniperdrood', class: classes.Druid, level: LEVEL_CAP, active: true },
  { name: 'Snipermagi', class: classes.Mage, level: LEVEL_CAP, active: true },
  { name: 'Snipedin', class: classes.Paladin, level: LEVEL_CAP, active: true },
  { name: 'Snípéh', class: classes.Hunter, level: LEVEL_CAP, active: true },
  { name: 'Tyriant', class: classes.Rogue, level: LEVEL_CAP, active: true },

  { name: 'Chopstickdik', class: classes.Hunter, level: LEVEL_CAP, active: true },

  { name: 'Harlott', class: classes.Priest, level: LEVEL_CAP, active: true },

  { name: 'Sónofalích', class: classes.DeathKnight, level: LEVEL_CAP, active: true },
  { name: 'Aronín', class: classes.Mage, level: LEVEL_CAP, active: true },

  { name: 'Drakulth', class: classes.DeathKnight, level: LEVEL_CAP, active: true },

  { name: 'Càres', class: classes.Monk, level: LEVEL_CAP, active: true },

  { name: 'Dreamcrow', class: classes.Druid, level: LEVEL_CAP, active: true },
  { name: 'Elentoria', class: classes.Priest, level: LEVEL_CAP, active: true },
  { name: 'Skjaldmeyjar', class: classes.Warrior, level: LEVEL_CAP, active: true },

  { name: 'Liwely', class: classes.Priest, level: LEVEL_CAP, active: true },

  // Ex members
  { name: 'Ysania', class: classes.Paladin, level: LEVEL_CAP, active: false },
]

export function findByName(name) {
  const found = Characters.find(function(char) {
    return char.name === name;
  })
  if (typeof found === 'object') {
    if (Array.isArray(found)) {
      return found[0]
    }
    return found
  }

  return false
}

export default Characters
