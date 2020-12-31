import Page from '../../Components/WoWClassPage'
import { DemonHunter } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/zGGkNGC'

export default function ClassDemonHunter() {
  return (
    <Page class={DemonHunter} discord={DISCORD}>
    </Page>
  )
}
