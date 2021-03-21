import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Warrior } from '../../data/wow-classes'

const guides = {
  arms: [],
  fury: [],
  protection: [],
}

export default function ClassWarrior() {
  const props = {
    title: 'Warior',
    class: Warrior,
    guides: guides,
    specs: [
      { name: 'Arms', key: 'arms' },
      { name: 'Fury', key: 'fury' },
      { name: 'Protection', key: 'protection' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}

