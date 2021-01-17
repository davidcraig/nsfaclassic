import Page from '../../Components/WoWClassPage'
import { Warlock } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/0onXDymd9Wpc2CEu'

export default function ClassWarlock() {
  return (
    <Page title='Warlock' class={Warlock} discord={DISCORD} />
  )
}
