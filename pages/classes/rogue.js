import Page from '../../Components/WoWClassPage'
import { Rogue } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/0h08tydxoNhfDVZf'

export default function ClassRogue() {
  return (
    <Page title='Rogue' class={Rogue} discord={DISCORD} />
  )
}
