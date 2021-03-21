import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Rogue } from '../../data/wow-classes'

const guides = {
  assassination: [],
  subtlety: [],
  outlaw: [],
}

export default function ClassRogue() {
  const props = {
    title: 'Rogue',
    class: Rogue,
    guides: guides,
    specs: [
      { name: 'Outlaw', key: 'outlaw' },
      { name: 'Subtlety', key: 'subtlety' },
      { name: 'Assassination', key: 'assassination' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
