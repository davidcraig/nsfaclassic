import React from 'react'
import crafting from '../data/crafting'
import PageWithWidgets from '../Components/PageWithWidgets'
import { TabbedContent } from '@davidcraig/react-bulma'

function RenderProfessionTabs() {
  const content = [
    { title: 'Tailoring', content: '' },
    { title: 'Leatherworking', content: '' },
    { title: 'Blacksmithing', content: '' },
    // { title: 'Jewelcrafting', content: '' },
  ]

  return <TabbedContent content={content} />
}

export default function Crafting() {
  return <PageWithWidgets title='Crafting'>
    <h1 className='h1'>Crafting</h1>
    {RenderProfessionTabs()}
  </PageWithWidgets>
}
