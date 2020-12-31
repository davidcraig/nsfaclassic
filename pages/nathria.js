import Head from 'next/head'
import { Column, Columns, ItemGrid } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'
import { Card, TabbedContent } from '@davidcraig/react-bulma'
import { castleNathria } from '../data/shadowlands/raids'

const SHOW_MYTHIC = false

const videos = {
  normal_heroic: [],
  mythic: [],
}

const NormalHeroicVideos = {
  title: 'Normal / Heroic',
  content: (
    <ItemGrid columns={2}>
      {
        castleNathria.map(boss => (
          <Card ytVideo={boss.video} title={boss.name} />
        ))
      }
    </ItemGrid>
  )
}
const MythicVideos = {
  title: 'Mythic',
  content: (
    <ItemGrid columns={2}>
      {
        castleNathria.map(boss => (
          <Card ytVideo={boss.video_mythic} title={boss.name} />
        ))
      }
    </ItemGrid>
  )
}

export default function CastleNathriaPage() {
  const tabbedContent = [NormalHeroicVideos]
  if (SHOW_MYTHIC) {
    tabbedContent.push(MythicVideos)
  }

  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1'>Castle Nathria</h1>
            <h2 className='h2'>Videos (Fatboss)</h2>
            <TabbedContent content={tabbedContent} />
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
