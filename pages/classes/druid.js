import React from 'react'
import Page from '../../Components/WoWClassPage'
import { Druid } from '../../data/wow-classes'

const guides = {
  restoration: [
  ],
  balance: [
  ],
  feral: [
  ],
  guardian: [
  ],
}

export default function ClassDruid() {
  return (
    <Page
      title='Druid'
      class={Druid}
      guides={guides}
      specs={[
        { name: 'Guardian', key: 'guardian' },
        { name: 'Restoration', key: 'restoration' },
        { name: 'Balance', key: 'balance' },
        { name: 'Feral', key: 'feral' },
      ]}
    >
    </Page>
  )
}
