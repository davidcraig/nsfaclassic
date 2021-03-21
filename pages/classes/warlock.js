import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Warlock } from '../../data/wow-classes'

const guides = {
  affliction: [],
  destruction: [],
  demonology: [],
}

export default function ClassWarlock() {
  const props = {
    title: 'Warlock',
    class: Warlock,
    guides: guides,
    specs: [
      { name: 'Affliction', key: 'affliction' },
      { name: 'Destruction', key: 'destruction' },
      { name: 'Demonology', key: 'demonology' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
