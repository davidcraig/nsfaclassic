import { Card } from '@davidcraig/react-bulma'

const castleNathria = [
  { name: 'Shriekwing',            slug: 'cn-shriekwing', normal: false, heroic: false },
  { name: 'Huntsman Altimor',      slug: 'cn-altimor',    normal: false, heroic: false },
  { name: "Artificer Xy'mox",      slug: 'cn-xymox',      normal: false, heroic: false },
  { name: "Sun King's Salvation",  slug: 'cn-sunking',    normal: false, heroic: false },
  { name: 'Council of Blood',      slug: 'cn-council',    normal: false, heroic: false },
  { name: 'Hungering Destroyer',   slug: 'cn-hungering',  normal: false, heroic: false },
  { name: 'Lady Darkvein',         slug: 'cn-darkvein',   normal: false, heroic: false },
  { name: 'Sludgefist',            slug: 'cn-sludgefist', normal: false, heroic: false },
  { name: 'Stone Legion Generals', slug: 'cn-generals',   normal: false, heroic: false },
  { name: 'Sire Denathrius',       slug: 'cn-denathrius', normal: false, heroic: false },
]

function getCurrentRaidTier() {
  return castleNathria
}

function getStatus (progression) {
  if (progression.mythic) { return 'Killed: N, HC, M' }
  if (progression.heroic) { return 'Killed: N, HC' }
  if (progression.normal) { return 'Killed: N' }
  return 'Not yet killed.'
}

function getStatusClass (progression) {
  if (progression.mythic) { return 'mythic' }
  if (progression.heroic) { return 'heroic' }
  if (progression.normal) { return 'normal' }
  return 'alive'
}

export default function Progress() {
  const progression = getCurrentRaidTier()

  return (
    <Card title='Progression' className='widget widget-progression'>
      <table className='table is-narrow is-striped'>
        <tbody>
          {progression.map(p => {
            const status = getStatus(p)
            const statusClass = getStatusClass(p)

            return <tr key={p.slug} className={statusClass}>
              <td>{p.name}</td>
              <td>{status}</td>
            </tr>
          })}
        </tbody>
      </table>
    </Card>
  )
}
