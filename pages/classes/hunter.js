import Page from '../../Components/WoWClassPage'
import { Hunter } from '../../data/wow-classes'

const DISCORD = ['https://discord.gg/yqer4BX', 'https://discord.gg/G3tYdTG']

export default function ClassHunter() {
  return (
    <Page title='Hunter' class={Hunter} discord={DISCORD} />
  )
}
