import { Navbar, Brand, Start, End, Item } from '@davidcraig/react-bulma'

export default function Navigation() {
  return (
    <Navbar>
      <Brand title='Not Safe for Azeroth' />
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

