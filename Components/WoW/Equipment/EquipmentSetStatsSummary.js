import React, { useState } from 'react'

export default function EquipmentSetStatsSummary({ set }) {
  console.log(set)
  if (!set.hasOwnProperty('stats')) {
    return ''
  }

  /* Render a stat value */
  const renderValue = (stat) => {
    if (typeof stat == 'undefined') {
      return ''
    }

    if (stat.value > 0) {
      return <tr>{stat.value} {stat.display}</tr>
    }
  }

  const stats = set.stats
  const statsToRender = [
    'armour', 'stamina',
    'agility', 'intellect', 'strength',
    'attackPower', 'manaPer5',
    'hitRating', 'critRating'
  ]
  const socketColours = [
    'red', 'blue', 'yellow', 'meta'
  ]

  return (
    <>
    <p>Stats</p>
    <table>
      <tbody>
        {
          statsToRender.map(key => {
            return renderValue(stats[key])
          })
        }
        {
          socketColours.map(key => {
            return renderValue(stats.sockets[key])
          })
        }
        {
          statsToRender.map(key => {
            return renderValue(stats.sockets.bonuses[key])
          })
        }
      </tbody>
    </table>
    </>
  )
}
