class CombatLog {
  constructor(props) {
    this.date = props.date
    this.dateHuman = props.dateHuman
    this.id = props.id
    this.raid = props.raid
    if (props.kills) { this.kills = props.kills }
    if (props.progression) { this.progression = props.progression }
    if (props.pulls) { this.pulls = props.pulls }
    if (props.fights) { this.fights = props.fights }
  }

  wcl() {
    return `https://www.warcraftlogs.com/reports/${this.id}`
  }

  wa() {
    return `https://www.wowanalyzer.com/report/${this.id}`
  }

  wf() {
    return `https://www.wipefest.gg/report/${this.id}`
  }
}

const NATHRIA = 'Castle Nathria'
const NORMAL = 'N'
const HEROIC = 'HC'

export const CombatLogs = [
  new CombatLog({
    date: '2021-01-01',
    dateHuman: 'Jan 01 21',
    id: 'k6wLJjP9gtyTvGHb',
    raid: {
      zone: NATHRIA,
      difficulty: NORMAL
    },
    kills: 1,
    pulls: 12,
    progression: '1 / 10 N'
  }),

  new CombatLog({
    date: '2021-01-06',
    dateHuman: 'Jan 06 21',
    id: '3jd1DaghXc9JV4x7',
    raid: {
      zone: NATHRIA,
      difficulty: NORMAL
    },
    kills: 3,
    pulls: 5,
    progression: '4 / 10 N'
  }),

  new CombatLog({
    date: '2021-01-08',
    dateHuman: 'Jan 08 21',
    id: 'PCZ7qRrfTxz1h84G',
    raid: {
      zone: NATHRIA,
      difficulty: NORMAL
    },
    kills: 1,
    pulls: 14,
    progression: '4 / 10 N'
  }),

  new CombatLog({
    date: '2021-01-13',
    dateHuman: 'Jan 13 21',
    id: 'phDcxB6JLyPNr7HR',
    raid: {
      zone: NATHRIA,
      difficulty: NORMAL
    },
    kills: 4,
    pulls: 13,
    progression: '5 / 10 N'
  }),

  new CombatLog({
    date: '2021-01-15',
    dateHuman: 'Jan 15 21',
    id: '7bDHWGJwQcpMAg6h',
    raid: {
      zone: NATHRIA,
      difficulty: HEROIC
    },
    kills: 0,
    pulls: 3,
  }),

  new CombatLog({
    date: '2021-01-15',
    dateHuman: 'Jan 15 21',
    id: 'GKN4vhkxBwrQ3TPD',
    raid: {
      zone: NATHRIA,
      difficulty: NORMAL
    },
    kills: 2,
    pulls: 6,
    progression: '6 / 10 N'
  }),
]

export default CombatLogs
