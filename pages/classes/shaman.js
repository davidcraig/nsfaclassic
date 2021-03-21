import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Shaman } from '../../data/wow-classes'

const guides = {
  restoration: [],
  enhancement: [],
  elemental: [],
}

export default function ClassShaman() {
  const props = {
    title: 'Shaman',
    class: Shaman,
    guides: guides,
    specs: [
      { name: 'Restoration', key: 'restoration' },
      { name: 'Enhancement', key: 'enhancement' },
      { name: 'Elemental', key: 'elemental' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
