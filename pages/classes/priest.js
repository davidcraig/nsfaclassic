import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Priest } from '../../data/wow-classes'

const guides = {
  holy: [],
  discipline: [],
  shadow: [],
}

export default function ClassPriest() {
  const props = {
    title: 'Priest',
    class: Priest,
    guides: guides,
    specs: [
      { name: 'Holy', key: 'holy' },
      { name: 'Discipline', key: 'discipline' },
      { name: 'Shadow', key: 'shadow' },
    ]
  }

  return (
    <Page { ...props }></Page>
  )
}
