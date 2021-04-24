import React, { useState } from 'react'
import Page from '../../../../Components/PageWithWidgets'

const materials = [
  { item: { name: 'Peacebloom', id: 2447 }, quantity: 65 },
  { item: { name: 'Silverleaf', id: 765 }, quantity: 65 },
  { item: { name: 'Empty Vial', id: 3371 }, quantity: 65 },
  { item: { name: 'Briarthorn', id: 2450 }, quantity: 100 },
  { item: { name: 'Bruiseweed', id: 2453 }, quantity: 35 },
  { item: { name: 'Leaded Vial', id: 3372 }, quantity: 35 },
]

const steps = [
  // 1-75
  'Reach Level 5',
  'goto Stormwind City 45.77,78.03',
  'Talk to Tel\'Athir -> Learn Apprentice Alchemy',
  'Collect 65 Peacebloom',
  'Collect 65 Silverleaf',
  'Talk to Eldraeith',
  'Buy 65 Empty Vial',
  'Create 65 Minor Healing Potions (save them for later)', // [CRAFT]
  'Reach Level 60 Alchemy',

  // 75-150
  'Reach Level 10',
  'talk Lilyssia Nightbreeze -> Learn Journeyman Alchemy',
  'Collect 65 Briarthorn',
  'Learn Lesser Healing Potion',
  'Create 65 Lesser Healing Potions', // [CRAFT]
  'Reach Level 110 Alchemy',
  'Collect 35 Briarthorn',
  'Collect 35 Bruiseweed',
  'talk Lilyssia Nightbreeze -> Learn Healing Potion',
  'talk Eldraeith -> Buy 35 Leaded Vial',
  'Create 35 Healing Potions', // [CRAFT]
  'Reach Level 140 Alchemy',
  'Reach Level 20'
]

{/*
      talk Ainethil##4160
      |tip Inside the building.
      Learn Expert Alchemy |skillmax Alchemy,225 |goto Darnassus 54.88,24.02
      step
      collect 20 Mageroyal##785
      collect 20 Stranglekelp##3820
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 155
      step
      talk Ainethil##4160
      |tip Inside the building.
      learn Lesser Mana Potion##3173 |goto 54.88,24.02
      step
      talk Ulthir##4226
      |tip Downstairs inside the building.
      buy 20 Empty Vial##3371 |goto Darnassus 55.85,24.47
      |only if skill("Alchemy") < 155
      step
      Open Your Alchemy Crafting Panel:
      _<Create 20 Lesser Mana Potions>_
      Reach Level 155 Alchemy |skill Alchemy,155
      step
      collect 35 Liferoot##3357
      collect 35 Kingsblood##3356
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 185
      step
      talk Ainethil##4160
      |tip Inside the building.
      learn Greater Healing Potion##7181 |goto 54.88,24.02
      step
      talk Ulthir##4226
      |tip Inside the building.
      buy 35 Leaded Vial##3372 |goto 46.66,78.64
      |only if skill("Alchemy") < 185
      step
      Open Your Alchemy Crafting Panel:
      _<Create 35 Greater Healing Potions>_
      Reach Level 185 Alchemy |skill Alchemy,185
      step
      collect 30 Goldthorn##3821
      collect 30 Stranglekelp##3820
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 210
      step
      talk Ainethil##4160
      |tip Inside the building.
      learn Elixir of Agility##11449 |goto 54.88,24.02
      step
      talk Ulthir##4226
      |tip Inside the building.
      buy 30 Leaded Vial##3372 |goto 46.66,78.64
      |only if skill("Alchemy") < 210
      step
      Open Your Alchemy Crafting Panel:
      _<Create 30 Elixirs of Agility>_
      Reach Level 210 Alchemy |skill Alchemy,210
      step
      collect 5 Wild Steelbloom##3355
      collect 5 Goldthorn##3821
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 215
      step
      talk Ainethil##4160
      |tip Inside the building.
      learn Elixir of Greater Defense##11450 |goto 54.88,24.02
      step
      talk Ulthir##4226
      |tip Inside the building.
      buy 5 Leaded Vial##3372 |goto 46.66,78.64
      |only if skill("Alchemy") < 215
      step
      Open Your Alchemy Crafting Panel:
      _<Create 5 Elixirs of Greater Defense>_
      Reach Level 215 Alchemy |skill Alchemy,215
      step
      Reach Level 35 |ding 35
      |tip You must be at least this level before you can learn the next rank of this profession.
      |tip Use the Leveling guides to accomplish this.
      step
      Enter the building |goto Feralas 32.34,43.69 < 7 |walk
      talk Kylanna Windwhisper##7948
      |tip Inside the building.
      Learn Artisan Alchemy |skillmax Alchemy,300 |goto Feralas 32.62,43.78
      step
      talk Kylanna Windwhisper##7948
      |tip Inside the building.
      learn Superior Healing Potion##11457 |goto 32.62,43.78
      step
      collect 15 Sungrass##8838
      collect 15 Khadgar's Whisker##3358
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 230
      step
      Enter the building |goto 32.34,43.69 < 7 |walk
      talk Logannas##8157
      |tip Inside the building.
      buy 15 Crystal Vial##8925 |goto 32.67,44.03
      |only if skill("Alchemy") < 230
      step
      Open Your Alchemy Crafting Panel:
      _<Create 15 Superior Healing Potions>_
      Reach Level 230 Alchemy |skill Alchemy,230
      step
      collect 25 Arthas' Tears##8836
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 250
      step
      Enter the building |goto 32.34,43.69 < 7 |walk
      talk Kylanna Windwhisper##7948
      |tip Inside the building.
      learn Elixir of Detect Undead##11460 |goto 32.62,43.78
      step
      talk Logannas##8157
      |tip Inside the building.
      buy 25 Crystal Vial##8925 |goto 32.67,44.03
      |only if skill("Alchemy") < 250
      step
      Open Your Alchemy Crafting Panel:
      _<Create 25 Elixirs of Detect Undead>_
      Reach Level 250 Alchemy |skill Alchemy,250
      step
      collect 25 Sungrass##8838
      collect 25 Goldthorn##3821
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 265
      step
      Enter the building |goto 32.34,43.69 < 7 |walk
      talk Kylanna Windwhisper##7948
      |tip Inside the building.
      learn Elixir of Greater Agility##11467 |goto 32.62,43.78
      step
      talk Logannas##8157
      |tip Inside the building.
      buy 25 Crystal Vial##8925 |goto 32.67,44.03
      |only if skill("Alchemy") < 265
      step
      Open Your Alchemy Crafting Panel:
      _<Create 25 Elixirs of Greater Agility>_
      Reach Level 265 Alchemy |skill Alchemy,265
      step
      talk Ulthir##4226
      |tip Inside the building.
      buy Recipe: Superior Mana Potion##13477 |n
      |tip This is a limited supply item.
      |tip If he doesn't have it for sale, check the Auction House.
      use the Recipe: Superior Mana Potion##13477
      learn Superior Mana Potion##17553 |goto Darnassus 46.66,78.64
      step
      collect 50 Sungrass##8838
      collect 50 Blindweed##8839
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 285
      step
      talk Ulthir##4226
      |tip Inside the building.
      buy 25 Crystal Vial##8925 |goto 46.66,78.64
      |only if skill("Alchemy") < 285
      step
      Open Your Alchemy Crafting Panel:
      _<Create 25 Superior Mana Potions>_
      Reach Level 285 Alchemy |skill Alchemy,285
      step
      Follow the path |goto Winterspring 60.56,38.20 < 7 |only if walking
      Enter the building |goto Winterspring 60.83,37.85 < 7 |walk
      talk Evie Whirlbrew##11188
      |tip Inside the building.
      buy 25 Crystal Vial##8925 |goto Winterspring 60.75,37.78
      step
      talk Evie Whirlbrew##11188
      |tip Inside the building.
      buy Recipe: Major Healing Potion##13480 |n
      |tip This is a limited supply item.
      |tip If she doesn't have it for sale, check the Auction House.
      use the Recipe: Major Healing Potion##13480
      learn Major Healing Potion##17556 |goto 60.75,37.78
      step
      collect 50 Golden Sansam##13464
      collect 25 Mountain Silversage##13465
      |tip If you have the Herbalism profession, you can gather these.
      |tip Search the guide menu for the item(s) to use the farming guides.
      |tip You can also purchase them from the Auction House.
      |only if skill("Alchemy") < 300
      step
      Open Your Alchemy Crafting Panel:
      _<Create 25 Major Healing Potions>_
      Reach Level 300 Alchemy |skill Alchemy,300
      */}

export default function ClassicProfessionAlchemy() {
  const [completedMaterials, setCompletedMaterials] = useState([])
  const [completedSteps, setCompletedSteps] = useState([])

  return (
    <Page title='Alchemy'>
      <h1 className='h1'>Classic Guide: Alchemy (1-300)</h1>
      {materials.map((material, idx) => {
        return (
          <>
            {material.item.name} x {material.quantity}, 
          </>
        )
      })}
      <h2 className='h2'>Steps</h2>

      {steps.map((step, idx) => {
        return <p>{step}</p>
      })}
    </Page>
  )
}
