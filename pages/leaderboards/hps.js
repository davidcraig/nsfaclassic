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
  const output = []
  const leaderboards = {}

  logs.forEach(log => {
    if (!log.fights) { return }
    log.fights.forEach(fight => {
      if (!fight.hps) { return }

      // HPS
      fight.hps.forEach(detail => {
        const character = detail.character.name
        if (!Object.prototype.hasOwnProperty.call(leaderboards, character)) {
          leaderboards[character] = { hps: 0, css: detail.character.class.css }
        }

        if (detail.hps > leaderboards[character].hps) {
          leaderboards[character].hps = detail.hps
        }
      })
    })
  })

  Object.keys(leaderboards).map(char => {
    const entry = leaderboards[char]
    output.push({ character: char, hps: entry.hps, css: entry.css })
  })

  return output.sort((a, b) => parseFloat(b.hps) - parseFloat(a.hps))
}

export default function dpsLeaderboard() {
  const normal_leaderboards = getLeaderboardValues(Logs_Nathria_Normal)
  const heroic_leaderboards = getLeaderboardValues(Logs_Nathria_Heroic)

  return (
    <PageWithWidgets>

      <h1 className='h1'>Leaderboards (HPS)</h1>
      <TabbedContent
        content={[
          { title: 'Castle Nathria', content: (
            <TabbedContent
              content={[
                {
                  title: 'Normal',
                  content: <Leaderboard leaderboard={normal_leaderboards} metric='hps' />
                },
                { title: 'Heroic',
                  content: <Leaderboard leaderboard={heroic_leaderboards} metric='hps' />
                }
              ]}
            />
          ) }
        ]}
      />
    </PageWithWidgets>
  )
}
