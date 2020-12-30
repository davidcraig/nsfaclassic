import Head from 'next/head'
import { Column, Columns, ItemGrid } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'
import { Card } from '@davidcraig/react-bulma/dist/Card/Card'
import wowClasses from '../data/wow-classes'

const officers = [
  {
    real: 'Dave',
    alias: 'Sniper',
    rank: 'Fuhrer',
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
    main: {
      class: wowClasses.DeathKnight
    }
  },
  {
    real: 'Rob',
    alias: 'Chopstick',
    rank: 'Officer',
    main: {
      class: wowClasses.Hunter
    }
  },
  {
    real: 'Nigel',
    alias: '',
    rank: 'Officer',
    main: {
      class: wowClasses.Priest
    }
  }
]

export default function Officers() {
  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1'>Officers</h1>
            <ItemGrid columns={2}>
              {officers.map(officer => {
                return <Card title={`${officer.alias} (${officer.real})`} className={officer.main.class.css}></Card>
              })}
            </ItemGrid>
          </main>
        </Column>
        <Column>
          <Recruitment />
          <Progress />
        </Column>
      </Columns>
    </div>
  )
}
