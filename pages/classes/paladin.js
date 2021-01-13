import Page from '../../Components/WoWClassPage'
import { Paladin } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/hammerofwrath'

export default function ClassPaladin() {
  return (
    <Page class={Paladin} discord={DISCORD} />
  )
}