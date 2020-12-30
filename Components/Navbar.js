import { Navbar, Brand, Start, End, Item } from '@davidcraig/react-bulma'

const pages = [
  { name: 'Rules', slug: 'rules' },
  { name: 'Officers', slug: 'officers' }
]

export default function Navigation() {
  return (
    <Navbar>
      <Brand title='Not Safe for Azeroth' />
      <Start>
        {pages.map(page => {
          return <Item title={page.name} href={page.slug} />
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

