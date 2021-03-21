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
    name: 'Classes', pages: [
      { name: 'Priest', slug: '/classes/priest', wowClassColour: true },
      { name: 'Mage', slug: '/classes/mage', wowClassColour: true },
      { name: 'Warlock', slug: '/classes/warlock', wowClassColour: true },
      { name: 'Druid', slug: '/classes/druid', wowClassColour: true },
      { name: 'Rogue', slug: '/classes/rogue', wowClassColour: true },
      { name: 'Monk', slug: '/classes/monk', wowClassColour: true },
      { name: 'Demon Hunter', slug: '/classes/demonhunter', wowClassColour: true },
      { name: 'Hunter', slug: '/classes/hunter', wowClassColour: true },
      { name: 'Shaman', slug: '/classes/shaman', wowClassColour: true },
      { name: 'Warrior', slug: '/classes/warrior', wowClassColour: true },
      { name: 'Paladin', slug: '/classes/paladin', wowClassColour: true },
      { name: 'Death Knight', slug: '/classes/deathknight', wowClassColour: true }
    ]
  },
  {
    name: 'Classic', pages: [
      // { name: 'Castle Nathria', slug: '/shadowlands/nathria' },
      // { name: 'FAQ', slug: '/shadowlands/faq' },
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

