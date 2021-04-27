import React from 'react'
import Page from '../../../Components/WoWClassPage'
import { Druid } from '../../../data/wow-classes'

const guides = {
  // restoration: [
  // ],
  // balance: [
  // ],
  feral: [
    {
      url: 'https://www.youtube.com/watch?v=uh4qIVbt9UA',
      name: 'Classic TBC Feral Tank Guide'
    }
  ]
}

export default function ClassDruid() {
  return (
    <Page
      title='Druid'
      class={Druid}
      guides={guides}
      specs={[
        // { name: 'Balance', key: 'balance' },
        { name: 'Feral', key: 'feral' },
        // { name: 'Restoration', key: 'restoration' },
      ]}
    >
    </Page>
  )
}
