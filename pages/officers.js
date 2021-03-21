import React from 'react'
import { ItemGrid } from '@davidcraig/react-bulma'
import PageWithWidgets from '../Components/PageWithWidgets'
import { Card } from '@davidcraig/react-bulma/dist/Card/Card'
import wowClasses from '../data/wow-classes'

const officers = [
  {
    real: 'Dave',
    alias: 'Sniper',
    rank: 'Fuhrer',
    bio: '',
    main: {
      class: wowClasses.Hunter,
      roles: ['DPS'],
      name: "Sniperdrood"
    }
  },
  {
    real: 'Chris',
    alias: 'Tripód',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.Mage,
      roles: ['DPS'],
    }
  },
  {
    real: 'Nigel',
    alias: '',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.Rogue
    }
  },
  {
    real: 'Shaggy',
    alias: '',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.Paladin
    }
  },
]

export default function Officers() {
  return <PageWithWidgets>
    <h1 className='h1'>Officers</h1>
    <ItemGrid columns={2}>
      {officers.map(officer => {
        return <Card title={`${officer.alias} (${officer.real})`} className={officer.main.class.css}></Card>
      })}
    </ItemGrid>
  </PageWithWidgets>
}
