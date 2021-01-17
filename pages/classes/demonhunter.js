import Page from '../../Components/WoWClassPage'
import { DemonHunter } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/zGGkNGC'

export default function ClassDemonHunter() {
  return (
    <Page title='Demon Hunter' class={DemonHunter} discord={DISCORD}>
    </Page>
  )
}
