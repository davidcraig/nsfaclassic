import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Mage } from '../../data/wow-classes'

const guides = {
  arcane: [],
  fire: [],
  frost: [],
}

export default function ClassMage() {
  const props = {
    title: 'Mage',
    class: Mage,
    guides: guides,
    specs: [
      { name: 'Arcane', key: 'arcane' },
      { name: 'Fire', key: 'fire' },
      { name: 'Frost', key: 'frost' },
    ]
  }

  return (
    <Page { ...props } />
  )
}
