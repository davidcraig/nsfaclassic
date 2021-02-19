import { findByName } from '../../../../characters'

const SNIPERDROOD = findByName('Sniperdrood')
const CHOPSTICKDIK = findByName('Chopstickdik')
const DREAMCROW = findByName('Dreamcrow')
const HARLOTT = findByName('Harlott')
const SONOFALICH = findByName('Sónofalích')
const ELENTORIA = findByName('Elentoria')

export default {
  date: '2021-01-01',
  dateHuman: 'Jan 01 21',
  id: 'k6wLJjP9gtyTvGHb',
  tags: ['progression'],
  raid: {
    zone: 'Castle Nathria',
    difficulty: 'N'
  },
  fights: [
    {
      boss: 'Shriekwing',
      time: (6 * 60) + 37,
      hps: [
        { character: ELENTORIA, hps: 1947.9 }
      ],
      dps: [
        { character: SONOFALICH, dps: 1879.8 },
        { character: CHOPSTICKDIK, dps: 1402.1 },
        { character: HARLOTT, dps: 1519.2 }
      ],
      tank_dps: [
        { character: SNIPERDROOD, dps: 1085.8 },
        { character: DREAMCROW, dps: 837.0 },
      ],
    }
  ],
  kills: 1,
  pulls: 12,
  progression: '1 / 10 N'
}
