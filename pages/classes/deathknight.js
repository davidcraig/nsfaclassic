import Page from '../../Components/WoWClassPage'
import { DeathKnight } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/acherus'

export default function ClassDeathKnight() {
  return (
    <Page class={DeathKnight} discord={DISCORD} />
  )
}
