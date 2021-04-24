import React from 'react'
import Page from '../../../Components/WoWClassPage'
import { Hunter } from '../../../data/wow-classes'
import EquipmentSetShortWithTooltips from '../../../Components/WoW/Equipment/EquipmentSetShortWithTooltips'
import EquipmentSetStatsSummary from '../../../Components/WoW/Equipment/EquipmentSetStatsSummary'
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

      <h3 className='h3'>Dungeon Set (Beast Lord Armor)</h3>
      <EquipmentSetShortWithTooltips name='Beast Lord Armor' set={HunterSets.dungeon.items} />
      <EquipmentSetStatsSummary set={HunterSets.dungeon} />

      <h3 className='h3'>Tier 4 (Demon Stalker Armor)</h3>
      <EquipmentSetShortWithTooltips set={HunterSets.tier[4].items} />
      <EquipmentSetStatsSummary set={HunterSets.tier[4]} />
    </Page>
  )
}
