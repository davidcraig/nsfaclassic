import Head from 'next/head'
import { Column, Columns, TabbedContent } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'
import Timeline from '../Components/Timeline'

const NathriaProgression = [
  {
    date: '1 Jan',
    content: 'Shriekwing [N]'
  },
  {
    date: '6 Jan',
    content: (
      <>
        <span>Huntsman Altimore [N]</span><br/>
        <span>Hungering Destroyer [N]</span>
      </>
    )
  },
  {
    date: '8 Jan',
    content: "Artificer Xy'mox [N]"
  },
  {
    date: '13 Jan',
    content: "Lady Innerva Darkvein [N]"
  }
]

export default function Progression() {
  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth | Progression</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1'>Progression</h1>

            <TabbedContent
              content={
                [
                  {
                    title: 'Castle Nathria',
                    content: (
                      <>
                        <Timeline
                          entries={NathriaProgression}
                        />
                      </>
                    )
                  }
                ]
              }
            />
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
