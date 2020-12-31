import Head from 'next/head'
import { Column, Columns } from '@davidcraig/react-bulma'
import Recruitment from '../../Components/Widgets/Recruitment'
import Progress from '../../Components/Widgets/Progress'

const DISCORD = ['https://discord.gg/0VcupJEQX0HuE5HH', 'https://discord.gg/AcTek6e']

export default function Shaman() {
  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1 fg-shaman'>Shaman</h1>
            
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
