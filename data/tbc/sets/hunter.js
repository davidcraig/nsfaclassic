import Tooltip from './tooltip'

// TODO: Add Gloves drop source
// TODO: Add Shoulders drop source

const HELM = 'helm'
const SHOULDERS = 'shoulders'
const CHEST = 'chest'
const LEGS = 'legs'
const HANDS = 'gloves'

const DUNGEON_SET_LINES_GROUP = new Tooltip.group([
  new Tooltip.line('Beast Lord Armor (0/5)', { className: 'tooltip-text-yellow' }),
  new Tooltip.line('Beast Lord Cuirass', { className: 'tooltip-text-grey' }),
  new Tooltip.line('Beast Lord Handguards', { className: 'tooltip-text-grey' }),
  new Tooltip.line('Beast Lord Helm', { className: 'tooltip-text-grey' }),
  new Tooltip.line('Beast Lord Leggings', { className: 'tooltip-text-grey' }),
  new Tooltip.line('Beast Lord Mantle', { className: 'tooltip-text-grey' }),
])
const DUNGEON_SET_BONUS_GROUP = new Tooltip.group([
  new Tooltip.line('(2) Set : Reduces the cooldown on your traps by 4 sec.'),
  new Tooltip.line('(4) Set : Each time you use your Kill Command ability, your attacks ignore 600 of your victim\'s armor for 15 sec.'),
])

export default {
  dungeon: {
    stats: {
      armour: { value: 2648, display: ' Armour' },
      agility: { value: 125, display: ' Agility' },
      stamina: { value: 88, display: ' Stamina' },
      intellect: { value: 94, display: ' Intellect' },
      attackPower: { value: 210, display: ' Attack Power' },
      manaPer5: { value: 16, display: ' Mana Per 5 Seconds' },
      sockets: {
        red: { value: 5, display: ' Red Sockets' },
        yellow: { value: 2, display: ' Yellow Sockets' },
        blue: { value: 1, display: ' Blue Sockets' },
        meta: { value: 1, display: ' Meta Sockets' },
        bonuses: {
          agility: { value: 4, display: ' Agility (Socket Bonus)' },
          manaPer5: { value: 2, display: ' Mana Per 5 Seconds (Socket Bonus)' },
          stamina: { value: 4, display: ' Stamina (Socket Bonus)' },
          hitRating: { value: 3, display: ' Hit Rating (Socket Bonus)' }
        }
      }
    },
    items: [
      // Helm
      {
        name: 'Beast Lord Helm',
        icon: '/img/wow/items/equipment/inv_helmet_19.jpg',
        slot: HELM,
        quality: 'rare',
        itemId: 28275,
        tooltip: [
          new Tooltip.line('Item Level 115', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Binds when picked up'),
          new Tooltip.line('Head'),
          new Tooltip.line('Mail'),
          new Tooltip.line('530 Armor'),
          new Tooltip.line('+25 Agility'),
          new Tooltip.line('+21 Stamina'),
          new Tooltip.line('+22 Intellect'),

          new Tooltip.group([
            Tooltip.socket.red(),
            Tooltip.socket.meta(),
            new Tooltip.line('Socket Bonus: 2 mana per 5 sec.', { className: 'tooltip-text-grey' }),
          ]),

          new Tooltip.group([
            new Tooltip.line('Durability 70 / 70'),
            new Tooltip.line('Requires Level 70'),
            new Tooltip.line('Equip: Increases attack power by 50.', { className: 'tooltip-text-green' }),
          ]),

          DUNGEON_SET_LINES_GROUP,
          DUNGEON_SET_BONUS_GROUP,

          new Tooltip.line('Source: The Mechanar - Mechano-Lord Capacitus', { className: 'tooltip-space' }),
        ]
      },
      // Shoulders
      {
        name: 'Beast Lord Mantle',
        icon: '/img/wow/items/equipment/inv_shoulder_23.jpg',
        slot: SHOULDERS,
        quality: 'rare',
        itemId: 27801,
        tooltip: [
          new Tooltip.line('Item Level 115', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Binds when picked up'),
          new Tooltip.line('Shoulder'),
          new Tooltip.line('Mail'),
          new Tooltip.line('489 Armor'),
          new Tooltip.line('+25 Agility'),
          new Tooltip.line('+12 Intellect'),

          new Tooltip.group([
            Tooltip.socket.yellow(),
            Tooltip.socket.red(),
            new Tooltip.line('Socket Bonus: +4 Stamina', { className: 'tooltip-text-grey' }),
          ]),

          new Tooltip.group([
            new Tooltip.line('Durability 70 / 70'),
            new Tooltip.line('Requires Level 70'),
            new Tooltip.line('Equip: Increases attack power by 34.', { className: 'tooltip-text-green' }),
            new Tooltip.line('Equip: Restores 5 mana per 5 sec.', { className: 'tooltip-text-green' }),
          ]),

          DUNGEON_SET_LINES_GROUP,
          DUNGEON_SET_BONUS_GROUP,

          new Tooltip.line('Source: ???', { className: 'tooltip-space' }),
        ]
      },
      // Chest
      {
        name: 'Beast Lord Cuirass',
        icon: '/img/wow/items/equipment/inv_chest_chain_03.jpg',
        slot: CHEST,
        quality: 'rare',
        itemId: 28228,
        tooltip: [
          new Tooltip.line('Item Level 115', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Binds when picked up'),
          new Tooltip.line('Shoulder'),
          new Tooltip.line('Mail'),
          new Tooltip.line('652 Armor'),
          new Tooltip.line('+20 Agility'),
          new Tooltip.line('+30 Stamina'),
          new Tooltip.line('+24 Intellect'),

          new Tooltip.group([
            Tooltip.socket.red(),
            Tooltip.socket.red(),
            Tooltip.socket.blue(),
            new Tooltip.line('Socket Bonus: +4 Agility', { className: 'tooltip-text-grey' }),
          ]),

          new Tooltip.group([
            new Tooltip.line('Durability 120 / 120'),
            new Tooltip.line('Requires Level 70'),
            new Tooltip.line('Equip: Increases attack power by 40.', { className: 'tooltip-text-green' }),
            new Tooltip.line('Equip: Restores 4 mana per 5 sec.', { className: 'tooltip-text-green' }),
          ]),

          DUNGEON_SET_LINES_GROUP,
          DUNGEON_SET_BONUS_GROUP,

          new Tooltip.line('Source: ???', { className: 'tooltip-space' }),
        ]
      },
      // Gloves
      {
        name: 'Beast Lord Handguards',
        icon: '/img/wow/items/equipment/inv_gauntlets_10.jpg',
        slot: HANDS,
        quality: 'rare',
        itemId: 27474,
        tooltip: [
          new Tooltip.line('Item Level 115', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Binds when picked up'),
          new Tooltip.line('Shoulder'),
          new Tooltip.line('Mail'),
          new Tooltip.line('407 Armor'),
          new Tooltip.line('+25 Agility'),
          new Tooltip.line('+12 Stamina'),
          new Tooltip.line('+17 Intellect'),

          new Tooltip.group([
            Tooltip.socket.red(),
            Tooltip.socket.blue(),
            new Tooltip.line('Socket Bonus: +3 Hit Rating', { className: 'tooltip-text-grey' }),
          ]),

          new Tooltip.group([
            new Tooltip.line('Durability 40 / 40'),
            new Tooltip.line('Requires Level 70'),
            new Tooltip.line('Equip: Increases attack power by 34.', { className: 'tooltip-text-green' }),
          ]),

          DUNGEON_SET_LINES_GROUP,
          DUNGEON_SET_BONUS_GROUP,

          new Tooltip.line('Source: ???', { className: 'tooltip-space' }),
        ]
      },
      // Leggings
      {
        name: 'Beast Lord Leggings',
        icon: '/img/wow/items/equipment/inv_pants_03.jpg',
        slot: LEGS,
        quality: 'rare',
        itemId: 27874,
        tooltip: [
          new Tooltip.line('Item Level 115', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Binds when picked up'),
          new Tooltip.line('Shoulder'),
          new Tooltip.line('Mail'),
          new Tooltip.line('570 Armor'),
          new Tooltip.line('+30 Agility'),
          new Tooltip.line('+25 Stamina'),
          new Tooltip.line('+19 Intellect'),

          new Tooltip.group([
            new Tooltip.line('Durability 90 / 90'),
            new Tooltip.line('Requires Level 70'),
            new Tooltip.line('Equip: Increases attack power by 52.', { className: 'tooltip-text-green' }),
            new Tooltip.line('Equip: Restores 7 mana per 5 sec.', { className: 'tooltip-text-green' }),
          ]),

          DUNGEON_SET_LINES_GROUP,
          DUNGEON_SET_BONUS_GROUP,

          new Tooltip.line('Source: ???', { className: 'tooltip-space' }),
        ]
      }
    ]
  },
  tier: {
    4: {
      stats: {
        armour: { value: (528 + 687 + 740 + 846 + 634), display: ' Armour' },
        agility: { value: (28 + 35 + 40 + 26), display: ' Agility' },
        stamina: { value: (23 + 24 + 28 + 30 + 24), display: ' Stamina' },
        intellect: { value: (23 + 24 + 27 + 30 + 35), display: ' Intellect' },
        attackPower: { value: (58 + 66 + 82 + 70 + 44), display: ' Attack Power' },
        hitRating: { value: (15), display: ' Hit Rating' },
        critRating: { value: (19), display: ' Crit Rating' },
        manaPer5: { value: (6 + 6 + 5), display: ' Mana Per 5 Seconds' },
        sockets: {
          red: { value: 2, display: ' Red Sockets' },
          yellow: { value: 2, display: ' Yellow Sockets' },
          blue: { value: 2, display: ' Blue Sockets' },
          meta: { value: 1, display: ' Meta Sockets' },
          bonuses: {
            attackPower: { value: 8, display: ' Attack Power (Socket Bonus)' },
            agility: { value: 4, display: ' Agility (Socket Bonus)' },
            intellect: { value: 3, display: ' Intellect (Socket Bonus)' },
            manaPer5: { value: 0, display: ' Mana Per 5 Seconds (Socket Bonus)' },
            stamina: { value: 0, display: ' Stamina (Socket Bonus)' },
            hitRating: { value: 0, display: ' Hit Rating (Socket Bonus)' }
          }
        }
      },
      items: [
        // Gloves
        {
          itemId: 29085
        }
      ]
    }
  }
}
