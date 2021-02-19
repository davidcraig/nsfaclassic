import m1_d1_y21_n from './logs/nathria/normal/jan1_2021'
import m1_d6_y21_n from './logs/nathria/normal/jan6_2021'
import m1_d8_y21_n from './logs/nathria/normal/jan8_2021'
import m1_d13_y21_n from './logs/nathria/normal/jan13_2021'

class CombatLog {
  constructor(props) {
    this.date = props.date
    this.dateHuman = props.dateHuman
    this.id = props.id
    this.raid = props.raid
    if (props.tags) {this.tags = props.tags }
    if (props.kills) { this.kills = props.kills }
    if (props.progression) { this.progression = props.progression }
    if (props.pulls) { this.pulls = props.pulls }
    if (props.fights) { this.fights = props.fights }
  }

  wcl() { return `https://www.warcraftlogs.com/reports/${this.id}` }
  wa() { return `https://www.wowanalyzer.com/report/${this.id}` }
  wf() { return `https://www.wipefest.gg/report/${this.id}` }
}

const NATHRIA = 'Castle Nathria'
const NORMAL = 'N'
const HEROIC = 'HC'

const log_jan_1_21_n = new CombatLog(m1_d1_y21_n)
const log_jan_6_21_n = new CombatLog(m1_d6_y21_n)
const log_jan_8_21_n = new CombatLog(m1_d8_y21_n)
const log_jan_13_21_n = new CombatLog(m1_d13_y21_n)

export const CombatLogs = [
  log_jan_1_21_n,
  log_jan_6_21_n,
  log_jan_8_21_n,
  log_jan_13_21_n,

  new CombatLog({
    date: '2021-01-15',
    dateHuman: '15 Jan 21',
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
    dateHuman: '15 Jan 21',
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

export const Logs_Nathria_Normal = [
  log_jan_1_21_n,
  log_jan_6_21_n,
  log_jan_8_21_n,
  log_jan_13_21_n,
]

export const Logs_Nathria_Heroic = [

]

export const Logs_Nathria_LastTen = [

]

export default CombatLogs
