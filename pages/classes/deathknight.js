import React from 'react'
import Page from '../../Components/WoWClassPage'
import { DeathKnight } from '../../data/wow-classes'

const DISCORD = 'https://discord.gg/acherus'

export default function ClassDeathKnight() {
  return (
    <Page title='Death Knight' class={DeathKnight} discord={DISCORD} />
  )
}
