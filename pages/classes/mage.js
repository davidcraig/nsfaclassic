import Page from '../../Components/WoWClassPage'
import { Mage } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/WzYCnbg'

export default function ClassMage() {
  return (
    <Page class={Mage} discord={DISCORD} />
  )
}