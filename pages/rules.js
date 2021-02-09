import React from 'react'
import PageWithWidgets from '../Components/PageWithWidgets'

const GUILD_RULES = [
  "English only, applies to both discord and guild chat.",
  "No spamming, this applies to guild chat and public channels like general and trade, inside of the guild our rules are mostly relaxed but we still want to maintain a good image to outsiders."
]
const RAID_RULES = [
  "If you sign up on the calendar and are unable to make it please unsign and speak to an officer, real life does happen but the least you can do is let us know if you can't make it.",
  "Have appropriate item level, castle nathria 180+ would be preferred, if you do not meet this yet please feel free to have discussions with officers and we will advise if we can bring you a long even if you do not exactly meet criteria (eg. we may be short some class)",
  "Gear *should* be enchanted and gemmed, however you don't need to enchant blue dungeon gear if you still have some, but all epics that can be enchanted should be ideally.",
  "Flasks, we will try to provide cauldrons from guild bank funds where possible, however you should always have your own to hand where this is not possible or realistic.",
  "Voice Chat: during trash clearing, talk about whatever you want, but once we pull keep the chat clear so we can callout important information.",
  "Loot - If you don't need an item that drops, and you are able to trade it with other players, please whisper the item to the officer handling loot, they can then ask the raid to roll on any items which will speed up the gearing process (this will prevent confusion with multiple people posting multiple items at once) [this also applies to boe's], as a team we need to improve the team overall",
]
const OTHER_RULES = []

function RulesSection(title, rules) {
  return (
    <>
      <h2 className='h2'>{title}</h2>
      <ul>
        {rules.map(rule => <li>{rule}</li>)}
      </ul>
    </>
  )
}

export default function Rules() {
  const guildRules = RulesSection('Guild Rules', GUILD_RULES)
  const raidRules = RulesSection('Raid Rules', RAID_RULES)
  // const otherRules = RulesSection('Other', OTHER_RULES)

  return <PageWithWidgets title='Guild Rules'>
    <h1 className='h1'>Rules</h1>

    {guildRules}
    {raidRules}
  </PageWithWidgets>
}
