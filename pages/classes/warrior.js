import Page from '../../Components/WoWClassPage'
import { Warrior } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/Skyhold'

export default function ClassWarrior() {
  return (
    <Page title='Warrior' class={Warrior} discord={DISCORD} />
  )
}

