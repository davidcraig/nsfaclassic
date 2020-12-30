import Head from 'next/head'
import { Column, Columns } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Recruitment'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1'>Not Safe for Azeroth</h1>
          </main>
        </Column>
        <Column>
          <Recruitment />
        </Column>
      </Columns>
    </div>
  )
}
