import Head from 'next/head'
import { Column, Columns, TabbedContent } from '@davidcraig/react-bulma'
import Recruitment from '../../Components/Widgets/Recruitment'
import Progress from '../../Components/Widgets/Progress'

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
            <h1 className='h1'>FAQ</h1>
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
