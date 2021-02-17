import React from 'react'
import Page from '../../Components/WoWClassPage'
import ExternalLink from '../../Components/ExternalLink'
import { Druid } from '../../data/wow-classes'
import { Card, Column, Columns } from '@davidcraig/react-bulma'

const guides = {
  resto: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/restoration-druid-pve-healing-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/restoration-druid/' },
    { name: 'Method', url: 'https://www.method.gg/guides/restoration-druid' },
  ],
  balance: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/balance-druid-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/balance-druid/' },
    { name: 'Method', url: 'https://www.method.gg/guides/balance-druid' },
  ],
  feral: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/feral-druid-pve-dps-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/feral-druid/' }
  ],
  guardian: [
    { name: 'Icy Veins', url: 'https://www.icy-veins.com/wow/guardian-druid-pve-tank-guide' },
    { name: 'Noxxic', url: 'https://www.noxxic.com/wow/guardian-druid/' }
  ],
}

const DISCORD = 'https://discord.gg/0dWu0WkuetF87H9H'

export default function ClassDruid() {
  return (
    <Page title='Druid' class={Druid} discord={DISCORD}>
      <Columns>
        <Column>
          <Card title='Restoration'>
            Guides:
            <ul>
            {
              guides.resto.map(guide => {
                return <li>
                  {ExternalLink(guide.url, guide.name)}
                </li>
              })
            }
            </ul>
          </Card>
          <Card title='Balance'>
            Guides:
            <ul>
            {
              guides.balance.map(guide => {
                return <li>
                  {ExternalLink(guide.url, guide.name)}
                </li>
              })
            }
            </ul>
          </Card>
        </Column>
        <Column>
          <Card title='Guardian'>
            Guides:
            <ul>
            {
              guides.guardian.map(guide => {
                return <li>
                  {ExternalLink(guide.url, guide.name)}
                </li>
              })
            }
            </ul>
          </Card>
          <Card title='Feral'>
            Guides:
            <ul>
            {
              guides.feral.map(guide => {
                return <li>
                  {ExternalLink(guide.url, guide.name)}
                </li>
              })
            }
            </ul>
          </Card>
        </Column>
      </Columns>
    </Page>
  )
}
