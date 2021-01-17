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
      class: wowClasses.Druid,
      roles: ['Tank', 'DPS', 'Healer'],
      name: "Sniperdrood"
    }
  },
  {
    real: 'Chris',
    alias: 'Sonofalich / Holyfunbags',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.DeathKnight
    }
  },
  {
    real: 'Rob',
    alias: 'Chopstick',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.Hunter
    }
  },
  {
    real: 'Nigel',
    alias: '',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.Priest
    }
  },
  {
    real: 'Jim',
    alias: 'Drakulth',
    rank: 'Officer',
    bio: '',
    main: {
      class: wowClasses.DeathKnight
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
