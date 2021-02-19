import { findByName } from '../../../../characters'

const SNIPERDROOD = findByName('Sniperdrood')
const CHOPSTICKDIK = findByName('Chopstickdik')
const DREAMCROW = findByName('Dreamcrow')
const HARLOTT = findByName('Harlott')
const DRAKULTH = findByName('Drakulth')
const SONOFALICH = findByName('Sónofalích')
const SKJALD = findByName('Skjaldmeyjar')
const ARONIN = findByName('Aronín')

export default {
  date: '2021-01-15',
  dateHuman: '15 Jan 21',
  id: 'GKN4vhkxBwrQ3TPD',
  raid: {
    zone: 'Castle Nathria',
    difficulty: 'N'
  },
  kills: 2,
  pulls: 6,
  progression: '6 / 10 N',
  fights: [
    {
      boss: "Artificer Xy'mox",
      time: (9 * 60) + 1,
      hps: [
        { character: SNIPERDROOD, hps: 3276.4 }
      ],
      dps: [
        { character: ARONIN, dps: 1906.9 },
        { character: CHOPSTICKDIK, dps: 1388.6 },
        { character: DRAKULTH, dps: 2763.9 }
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1015.4 },
        { character: SKJALD, dps: 1016 }
      ],
    },
    {
      boss: 'Sun King',
      time: (7 * 60) + 43,
      hps: [
        { character: SNIPERDROOD, hps: 4341.7 }
      ],
      dps: [
        { character: ARONIN, dps: 2412.9 },
        { character: CHOPSTICKDIK, dps: 2074.6 },
        { character: DRAKULTH, dps: 2892.1 }
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1382.5 },
        { character: SKJALD, dps: 1381.9 }
      ],
    }
  ]
}
