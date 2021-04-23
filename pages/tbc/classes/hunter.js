import React from 'react'
import Page from '../../../Components/WoWClassPage'
import { Hunter } from '../../../data/wow-classes'

const guides = {
  beastmaster: [],
  survival: [],
  marksmanship: [],
}

export default function ClassHunter() {
  return (
    <Page
      title='Hunter'
      class={Hunter}
      guides={guides}
      specs={[
        { name: 'Beast Master', key: 'beastmaster' },
        { name: 'Survival', key: 'survival' },
        { name: 'Marksmanship', key: 'marksmanship' },
      ]}
    >
    </Page>
  )
}
