import { Card } from '@davidcraig/react-bulma'

const castleNathria = [
  { name: 'Shriekwing',            slug: 'cn-shriekwing', normal: false, heroic: false, mythic: false },
  { name: 'Huntsman Altimor',      slug: 'cn-altimor',    normal: false, heroic: false, mythic: false },
  { name: "Artificer Xy'mox",      slug: 'cn-xymox',      normal: false, heroic: false, mythic: false },
  { name: "Sun King's Salvation",  slug: 'cn-sunking',    normal: false, heroic: false, mythic: false },
  { name: 'Council of Blood',      slug: 'cn-council',    normal: false, heroic: false, mythic: false },
  { name: 'Hungering Destroyer',   slug: 'cn-hungering',  normal: false, heroic: false, mythic: false },
  { name: 'Lady Darkvein',         slug: 'cn-darkvein',   normal: false, heroic: false, mythic: false },
  { name: 'Sludgefist',            slug: 'cn-sludgefist', normal: false, heroic: false, mythic: false },
  { name: 'Stone Legion Generals', slug: 'cn-generals',   normal: false, heroic: false, mythic: false },
  { name: 'Sire Denathrius',       slug: 'cn-denathrius', normal: false, heroic: false, mythic: false },
]

function getCurrentRaidTier() {
  return castleNathria
}

function getStatus (progression) {
  if (!progression.normal) {
    return 'Not yet killed'
  }

  let str = 'Killed: '
  let kills = []

  if (progression.normal) { kills.push('N') }
  if (progression.heroic) { kills.push('HC') }
  if (progression.mythic) { kills.push('M') }
  return str + kills.join(', ')
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
