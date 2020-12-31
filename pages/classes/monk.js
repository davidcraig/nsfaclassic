import Page from '../../Components/WoWClassPage'
import { Monk } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/0dkfBMAxzTkWj21F'

export default function ClassMonk() {
  return (
    <Page class={Monk} discord={DISCORD} />
  )
}
