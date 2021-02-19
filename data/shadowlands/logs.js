import m1_d1_y21_n from './logs/nathria/normal/jan1_2021'
import m1_d6_y21_n from './logs/nathria/normal/jan6_2021'
import m1_d8_y21_n from './logs/nathria/normal/jan8_2021'
import m1_d13_y21_n from './logs/nathria/normal/jan13_2021'
import m1_d15_y21_hc from './logs/nathria/heroic/jan15_2021'
import m1_d15_y21_n from './logs/nathria/normal/jan15_2021'

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

const logs = {
  2021: {
    nathria: {
      normal: {
        jan1: new CombatLog(m1_d1_y21_n),
        jan6: new CombatLog(m1_d6_y21_n),
        jan8: new CombatLog(m1_d8_y21_n),
        jan13: new CombatLog(m1_d13_y21_n),
        jan15: new CombatLog(m1_d15_y21_n)
      },
      heroic: {
        jan15: new CombatLog(m1_d15_y21_hc)
      }
    }
  }
}

export const CombatLogs = [
  logs[2021].nathria.normal.jan1,
  logs[2021].nathria.normal.jan6,
  logs[2021].nathria.normal.jan8,
  logs[2021].nathria.normal.jan13,
  logs[2021].nathria.heroic.jan15,
  logs[2021].nathria.normal.jan15,
]

export const Logs_Nathria_Normal = [
  logs[2021].nathria.normal.jan1,
  logs[2021].nathria.normal.jan6,
  logs[2021].nathria.normal.jan8,
  logs[2021].nathria.normal.jan13,
  logs[2021].nathria.normal.jan15,
]

export const Logs_Nathria_Heroic = [
  logs[2021].nathria.heroic.jan15,
]

// TODO: Create this list programatically 
export const Logs_Nathria_LastTen = [
  logs[2021].nathria.normal.jan1,
  logs[2021].nathria.normal.jan6,
  logs[2021].nathria.normal.jan8,
  logs[2021].nathria.normal.jan13,
  logs[2021].nathria.heroic.jan15,
  logs[2021].nathria.normal.jan15,
]

export default CombatLogs
