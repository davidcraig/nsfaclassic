import { Navbar, Brand, Start, End, Item, Dropdown } from '@davidcraig/react-bulma'

const pages = [
  { name: 'Rules', slug: '/rules' },
  { name: 'Officers', slug: '/officers' },
  {
    name: 'Classes', pages: [
      { name: 'Priest', slug: '/classes/priest' },
      { name: 'Mage', slug: '/classes/mage' },
      { name: 'Warlock', slug: '/classes/warlock' },
      { name: 'Druid', slug: '/classes/druid' },
      { name: 'Rogue', slug: '/classes/rogue' },
      { name: 'Monk', slug: '/classes/monk' },
      { name: 'Demon Hunter', slug: '/classes/demonhunter' },
      { name: 'Hunter', slug: '/classes/hunter' },
      { name: 'Shaman', slug: '/classes/shaman' },
      { name: 'Warrior', slug: '/classes/warrior' },
      { name: 'Paladin', slug: '/classes/paladin' },
      { name: 'Death Knight', slug: '/classes/deathknight' }
    ]
  },
  {
    name: 'Shadowlands', pages: [
      { name: 'Castle Nathria', slug: '/shadowlands/nathria' },
    ]
  }
]

export default function Navigation() {
  return (
    <Navbar>
      <Brand title='Not Safe for Azeroth' />
      <Start>
        {pages.map(page => {
          if (page.pages) {
            return <Dropdown key={page.name} title={page.name}>
              {page.pages.map(dropdownPage => {
                // Use wow class colours for class page links.
                let itemCssClass = ''
                if (page.name === 'Classes') {
                  itemCssClass = dropdownPage.slug.replace('/classes/', '')
                }
                return <Item className={itemCssClass} key={dropdownPage.slug} title={dropdownPage.name} href={dropdownPage.slug} />
              })}
            </Dropdown>
          }
          return <Item key={page.slug} title={page.name} href={page.slug} />
        })}
      </Start>
      <End>
        <Item
          href='https://raider.io/guilds/eu/silvermoon/Not%20Safe%20for%20Azeroth'
          title='Raider.IO'
          target='_blank'
        />
        <Item
          href='https://www.wowprogress.com/guild/eu/silvermoon/Not+Safe+for+Azeroth'
          title='WoWProgress'
          target='_blank'
        />
      </End>
    </Navbar>
  )
}

