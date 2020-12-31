import Page from '../../Components/WoWClassPage'
import { Druid } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/0dWu0WkuetF87H9H'

export default function ClassDruid() {
  return (
    <Page class={Druid} discord={DISCORD} />
  )
}
