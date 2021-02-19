import { findByName } from '../../../../characters'

const SNIPERDROOD = findByName('Sniperdrood')
const CHOPSTICKDIK = findByName('Chopstickdik')
const DREAMCROW = findByName('Dreamcrow')
const HARLOTT = findByName('Harlott')
const DRAKULTH = findByName('Drakulth')
const ELENTORIA = findByName('Elentoria')
const ARONIN = findByName('Aronín')
const CARES_MONK = findByName('Càres')
const SKJALD = findByName('Skjaldmeyjar')

export default {
  date: '2021-01-06',
  dateHuman: 'Jan 06 21',
  tags: ['progression'],
  id: '3jd1DaghXc9JV4x7',
  raid: {
    zone: 'Castle Nathria',
    difficulty: 'N'
  },
  fights: [
    {
      boss: 'Shriekwing',
      time: (6 * 60) + 5,
      hps: [ { character: CARES_MONK, hps: 2497.2 } ],
      dps: [
        { character: ARONIN, dps: 295.6 },
        { character: HARLOTT, dps: 1946 },
        { character: SNIPERDROOD, dps: 1637.1 },
        { character: CHOPSTICKDIK, dps: 1920.6 },
        { character: DRAKULTH, dps: 783.1 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 952.1 },
        { character: SKJALD, dps: 929.6 }
      ],
    },
    {
      boss: 'Huntsman Altimor',
      time: (5 * 60) + 24,
      hps: [
        { character: CARES_MONK, hps: 3726 }
      ],
      dps: [
        { character: ARONIN, dps: 2730.6 },
        { character: HARLOTT, dps: 2902.2 },
        { character: CHOPSTICKDIK, dps: 2793.6 },
        { character: SNIPERDROOD, dps: 2199.4 },
        { character: DRAKULTH, dps: 3759.1 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1776.1 },
        { character: SKJALD, dps: 1746.5 }
      ],
    },
    {
      boss: 'Hungering Destroyer',
      time: (5 * 60) + 24,
      hps: [
        { character: CARES_MONK, hps: 4270.7 }
      ],
      dps: [
        { character: ARONIN, dps: 1800.6 },
        { character: HARLOTT, dps: 2143.4 },
        { character: CHOPSTICKDIK, dps: 2130.4 },
        { character: SNIPERDROOD, dps: 2000.1 },
        { character: DRAKULTH, dps: 2840 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1180.6 },
        { character: SKJALD, dps: 1171.8 }
      ],
    }
  ],
  kills: 3,
  pulls: 5,
  progression: '4 / 10 N'
}
