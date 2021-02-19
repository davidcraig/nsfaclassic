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
  tags: ['farm'],
  date: '2021-01-13',
  dateHuman: '13 Jan 21',
  id: 'phDcxB6JLyPNr7HR',
  raid: {
    zone: 'Castle Nathria',
    difficulty: 'N'
  },
  kills: 4,
  pulls: 13,
  progression: '5 / 10 N',
  fights: [
    {
      boss: 'Shriekwing',
      time: (5 * 60) + 42,
      hps: [
        { character: SNIPERDROOD, hps: 2145 },
      ],
      dps: [
        { character: ARONIN, dps: 2018.6 },
        { character: HARLOTT, dps: 2156.6 },
        { character: DRAKULTH, dps: 2348 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 909.3 },
        { character: SKJALD, dps: 1072.1 }
      ],
    },
    {
      boss: 'Huntsman Altimor',
      time: (5 * 60) + 52,
      hps: [
        { character: SNIPERDROOD, hps: 3459.5 }
      ],
      dps: [
        { character: ARONIN, dps: 3561.3 },
        { character: HARLOTT, dps: 3347.3 },
        { character: DRAKULTH, dps: 3684.8 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1639.8 },
        { character: SKJALD, dps: 1753.7 }
      ],
    },
    {
      boss: 'Hungering Destroyer',
      time: (6 * 60) + 4,
      hps: [
        { character: SNIPERDROOD, hps: 2786.9 }
      ],
      dps: [
        { character: ARONIN, dps: 1009.6 },
        { character: HARLOTT, dps: 2604.3 },
        { character: DRAKULTH, dps: 2735.5 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1435.2 },
        { character: SKJALD, dps: 1400.6 }
      ],
    },
    {
      boss: 'Inerva Darkvein',
      time: (5 * 60) + 42,
      hps: [
        { character: SNIPERDROOD, hps: 4252.8 }
      ],
      dps: [
        { character: ARONIN, dps: 2972.6 },
        { character: HARLOTT, dps: 2759.5 },
        { character: DRAKULTH, dps: 3131 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1420.5 },
        { character: SKJALD, dps: 1717.5 }
      ],
    }
  ]
}
