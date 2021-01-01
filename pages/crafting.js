import Head from 'next/head'
import { Column, Columns, ItemGrid } from '@davidcraig/react-bulma'
import Recruitment from '../Components/Widgets/Recruitment'
import Progress from '../Components/Widgets/Progress'
import crafting from '../data/crafting'
import { TabbedContent } from '@davidcraig/react-bulma/dist/TabbedContent/TabbedContent'

function RenderProfessionTabs() {
  const content = [
    { title: 'Tailoring', content: RenderLegendaries('tailoring') },
    { title: 'Blacksmithing', content: RenderLegendaries('blacksmithing') },
    { title: 'Leatherworking', content: RenderLegendaries('leatherworking') },
    { title: 'Jewelcrafting', content: RenderLegendaries('jewelcrafting') },
  ]

  return <TabbedContent content={content} />
}

function RenderLegendaries(profession) {
  let prof = crafting.legendaries[profession]
  if (!prof.crafters) {
    return ''
  }

  return (
    <table className='table is-narrow is-striped'>
      <thead>
        <tr>
          <th>Crafter</th>
          <th>Item</th>
          <th>Rank</th>
          <th>Materials</th>
        </tr>
      </thead>
      <tbody>
        {
          prof.crafters.map(craft => {
            return craft.legendaries.map(lego => {
              return <tr key={lego.legendary.name+craft.crafter.name} className={`fg-${craft.crafter.class.css}`}>
                <td>{craft.crafter.name}</td>
                <td><a className='fg-legendary' href={`https://www.wowhead.com/item=${lego.legendary.id}`}>{lego.legendary.name}</a></td>
                <td>Rank {lego.rank}</td>
                <td>
                  {
                    lego.legendary.materials[`rank_`+lego.rank].map(mat => {
                      return (
                        <>
                        <a href={`https://www.wowhead.com/item=${mat.type.itemId}`}>{mat.type.name}</a> x{mat.quantity}<span className='space'> </span>
                        </>
                      )
                    })
                  }
                </td>
              </tr>
            })
          })
        }
      </tbody>
    </table>
  )
}

export default function Crafting() {
  return (
    <div>
      <Head>
        <title>Not Safe for Azeroth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Columns>
        <Column class='is-two-thirds'>
          <main>
            <h1 className='h1'>Crafting</h1>
            <h2 className='h2 fg-legendary-important'>Legendaries</h2>
            {RenderProfessionTabs()}
          </main>
        </Column>
        <Column>
          <Recruitment />
          <Progress />
        </Column>
      </Columns>
    </div>
  )
}
