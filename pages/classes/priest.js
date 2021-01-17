import Page from '../../Components/WoWClassPage'
import { Priest } from '../../data/wow-classes'

const DISCORD = ['https://discord.gg/WarcraftPriests', 'https://discord.gg/focusedwill']

export default function ClassPriest() {
  return (
    <Page title='Priest' class={Priest} discord={DISCORD} />
  )
}
