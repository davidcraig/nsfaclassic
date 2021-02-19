import React from 'react'
import PageWithWidgets from '../../Components/PageWithWidgets'
import Leaderboard from '../../Components/Leaderboard'
import { TabbedContent } from '@davidcraig/react-bulma'
import {
  Logs_Nathria_Normal,
  Logs_Nathria_Heroic,
  Logs_Nathria_LastTen
} from '../../data/shadowlands/logs'

function getLeaderboardValues(logs) {
  const output = {
    dps: [],
    tank_dps: [],
  }
  const leaderboards = {
    dps: {},
    tank_dps: {}
  }

  logs.forEach(log => {
    if (!log.fights) { return }
    log.fights.forEach(fight => {
      if (!fight.dps) { return }

      // DPS
      fight.dps.forEach(detail => {
        const character = detail.character.name

        if (!Object.prototype.hasOwnProperty.call(leaderboards.dps, character)) {
          leaderboards.dps[character] = { dps: 0, css: detail.character.class.css }
        }

        if (detail.dps > leaderboards.dps[character].dps) {
          if (character == 'Drakulth') {
            console.log('detail dps: ', detail.dps)
            console.log(leaderboards.dps[character].dps)
          }
          leaderboards.dps[character].dps = detail.dps
        }
      })

      // Tank DPS
      fight.tank_dps.forEach(detail => {
        const character = detail.character.name
        if (!Object.prototype.hasOwnProperty.call(leaderboards.tank_dps, character)) {
          leaderboards.tank_dps[character] = { dps: 0, css: detail.character.class.css }
        }

        if (detail.dps > leaderboards.tank_dps[character].dps) {
          leaderboards.tank_dps[character].dps = detail.dps
        }
      })
    })
  })

  // Build output values
  Object.keys(leaderboards).map(type => {
    const data = leaderboards[type]
    Object.keys(data).map(char => {
      console.log(char)
      if (char == 'Drakulth') {
        console.log(leaderboards[type][char])
      }
      output[type].push({
        character: char,
        dps: leaderboards[type][char].dps, css: leaderboards[type][char].css
      })
    })
  })

  output.dps = output.dps.sort((a, b) => parseFloat(b.dps) - parseFloat(a.dps))
  output.tank_dps = output.tank_dps.sort((a, b) => parseFloat(b.dps) - parseFloat(a.dps))
  return output
}

const RAID_TIERS = [
  {
    name: 'Castle Nathria',
    logs: {
      normal: Logs_Nathria_Normal,
      heroic: Logs_Nathria_Heroic
    }
  }
]

export default function dpsLeaderboard() {
  const normal_leaderboards = getLeaderboardValues(Logs_Nathria_Normal)
  const heroic_leaderboards = getLeaderboardValues(Logs_Nathria_Heroic)

  return (
    <PageWithWidgets>
      <h1 className='h1'>Leaderboards (DPS)</h1>

      <TabbedContent
        content={[
          { title: 'Castle Nathria', content: (
            <TabbedContent
              content={[
                { title: 'Normal', content: (
                  <TabbedContent
                    content={[
                      { title: 'DPS', content: (
                        <Leaderboard leaderboard={normal_leaderboards.dps} metric='dps' />
                      ) },
                      { title: 'Tank DPS', content: (
                        <Leaderboard leaderboard={normal_leaderboards.tank_dps} metric='dps' />
                      ) }
                    ]}
                  />
                ) },
                { title: 'Heroic', content: (
                  <TabbedContent
                    content={[
                      { title: 'DPS', content: (
                        <Leaderboard leaderboard={heroic_leaderboards.dps} metric='dps' />
                      ) },
                      { title: 'Tank DPS', content: (
                        <Leaderboard leaderboard={heroic_leaderboards.tank_dps} metric='dps' />
                      ) }
                    ]}
                  />
                ) }
              ]}
            />
          ) }
        ]}
      />
    </PageWithWidgets>
  )
}
