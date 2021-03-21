import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Paladin } from '../../data/wow-classes'

const guides = {
  holy: [],
  protection: [],
  retribution: [],
}

export default function ClassPaladin() {
  const props = {
    title: 'Paladin',
    class: Paladin,
    guides: guides,
    specs: [
      { name: 'Holy', key: 'holy' },
      { name: 'Protection', key: 'protection' },
      { name: 'Retribution', key: 'retribution' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
