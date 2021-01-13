import Page from '../../Components/WoWClassPage'
import { Shaman } from '../../data/wow-classes'

const DISCORD = ['https://discord.gg/0VcupJEQX0HuE5HH', 'https://discord.gg/AcTek6e']

export default function ClassShaman() {
  return (
    <Page class={Shaman} discord={DISCORD} />
  )
}