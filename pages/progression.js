import Head from 'next/head'
import { Column, Columns } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'
import Timeline from '../Components/Timeline'

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

            <h2 className='h2'>Castle Nathria</h2>
            <Timeline
              entries={[
                {
                  date: '1 Jan',
                  content: 'Shriekwing'
                },
                {
                  date: '6 Jan',
                  content: (
                    <>
                      <span>Huntsman Altimore</span><br/>
                      <span>Hungering Destroyer</span>
                    </>
                  )
                },
                {
                  date: '8 Jan',
                  content: "Artificer Xy'mox"
                }
              ]}
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
