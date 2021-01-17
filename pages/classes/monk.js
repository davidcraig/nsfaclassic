import { Card } from '@davidcraig/react-bulma'
import { Column, Columns } from '@davidcraig/react-bulma/dist/Columns/Columns'
import Page from '../../Components/WoWClassPage'
import { Monk } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/0dkfBMAxzTkWj21F'

export default function ClassMonk() {
  return (
    <Page title='Monk' class={Monk} discord={DISCORD}>
      <Columns>
        <Column>
          <Card
            ytVideo='3ZukkpWAXOQ'
            title='Monk Tank Guide'
            videoHeight='250'
          />
        </Column>
        <Column></Column>
      </Columns>
      
    </Page>
  )
}
