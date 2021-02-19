import { findByName } from '../../../../characters'

const SNIPERDROOD = findByName('Sniperdrood')
const CHOPSTICKDIK = findByName('Chopstickdik')
const DREAMCROW = findByName('Dreamcrow')
const HARLOTT = findByName('Harlott')
const DRAKULTH = findByName('Drakulth')
const SONOFALICH = findByName('Sónofalích')
const SKJALD = findByName('Skjaldmeyjar')

export default {
  tags: ['progression'],
  date: '2021-01-08',
  dateHuman: '8 Jan 21',
  id: 'PCZ7qRrfTxz1h84G',
  raid: {
    zone: 'Castle Nathria',
    difficulty: 'N'
  },
  kills: 1,
  pulls: 14,
  fights: [
    {
      boss: "Artificer Xy'mox",
      time: (7 * 60) + 10,
      hps: [ { character: SNIPERDROOD, hps: 3298.5 } ],
      dps: [
        { character: SONOFALICH, dps: 2409.7 },
        { character: HARLOTT, dps: 2050.2 },
        { character: CHOPSTICKDIK, dps: 2333.8 },
        { character: DRAKULTH, dps: 2956.7 },
      ],
      tank_dps: [
        { character: DREAMCROW, dps: 1071 },
        { character: SKJALD, dps: 1126.3 }
      ],
    },
  ]
}
