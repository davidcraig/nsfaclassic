import React from 'react'
import Page from '../../../Components/WoWClassPage'
import { Hunter } from '../../../data/wow-classes'
import EquipmentSetShortWithTooltips from '../../../Components/EquipmentSetShortWithTooltips'
import HunterSets from '../../../data/tbc/sets/hunter'

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
      <h2 className='h2'>Sets</h2>
      <h3 className='h3'>Dungeon Set (Beast Lord)</h3>
      <EquipmentSetShortWithTooltips set={HunterSets.dungeon} />
    </Page>
  )
}
