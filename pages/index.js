import Head from 'next/head'
import { Column, Columns } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://notsafeforazeroth.netlify.app/",
    "name": "Not Safe for Azeroth",
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
            <h1 className='h1'>&lt;Not Safe for Azeroth&gt;</h1>
            <p>A raiding guild aiming at heroic progression, the name is a play on the phrase "Not Safe for Work" as we are a dark humoured guild so we recruit only players who have a sense of humour and aren't easily offended (aka no snowflakes).</p>
          </main>
        </Column>
        <Column>
          <Recruitment />
          <Progress />
        </Column>
      </Columns>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  )
}
