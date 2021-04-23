import React from 'react'
import { Navbar, Brand, Start, End, Item, Dropdown } from '@davidcraig/react-bulma'

const pages = [
  {
    name: 'Guild', pages: [
      { name: 'Rules', slug: '/rules' },
      { name: 'Officers', slug: '/officers' },
      { name: 'Crafting', slug: '/crafting' },
    ]
  }
]

const wikiPages = [
  
  {
    name: 'Classic', pages: [
      // { name: 'Castle Nathria', slug: '/shadowlands/nathria' },
      // { name: 'FAQ', slug: '/shadowlands/faq' },
      {
        name: 'Classes', pages: [
          { name: 'Priest', slug: '/classic/classes/priest', wowClassColour: true },
          { name: 'Mage', slug: '/classic/classes/mage', wowClassColour: true },
          { name: 'Warlock', slug: '/classic/classes/warlock', wowClassColour: true },
          { name: 'Druid', slug: '/classic/classes/druid', wowClassColour: true },
          { name: 'Rogue', slug: '/classic/classes/rogue', wowClassColour: true },
          { name: 'Hunter', slug: '/classic/classes/hunter', wowClassColour: true },
          { name: 'Shaman', slug: '/classic/classes/shaman', wowClassColour: true },
          { name: 'Warrior', slug: '/classic/classes/warrior', wowClassColour: true },
          { name: 'Paladin', slug: '/classic/classes/paladin', wowClassColour: true },
        ]
      },
    ]
  }
]

function renderNavigationItem(item) {
  if (item.pages) {
    return <Dropdown key={item.name} title={item.name}>
      {item.pages.map(dropdownPage => {
        return renderNavigationItem(dropdownPage)
      })}
    </Dropdown>
  }
  let itemCssClass = ''
  if (item.wowClassColour) {
    itemCssClass = item.slug.replace('/classes/', '')
  }
  return <Item className={itemCssClass} key={item.slug} title={item.name} href={item.slug} />
}

export default function Navigation() {
  return (
    <Navbar>
      <Brand title='Not Safe for Azeroth' />
      <Start>
        {pages.map(page => {
          return renderNavigationItem(page)
        })}
      </Start>
      <End>
        {wikiPages.map(page => {
          return renderNavigationItem(page)
        })}
        {/* <Item
          href='https://raider.io/guilds/eu/silvermoon/Not%20Safe%20for%20Azeroth'
          title='Raider.IO'
          target='_blank'
        /> */}
        {/* <Item
          href='https://www.wowprogress.com/guild/eu/silvermoon/Not+Safe+for+Azeroth'
          title='WoWProgress'
          target='_blank'
        /> */}
      </End>
    </Navbar>
  )
}

