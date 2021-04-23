import Tooltip from './tooltip'

const HELM = 'helm'

export default {
  dungeon: [
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
          new Tooltip.line('Red Socket', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Meta Socket', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Socket Bonus: 2 mana per 5 sec.', { className: 'tooltip-text-grey' }),
        ]),

        new Tooltip.group([
          new Tooltip.line('Durability 70 / 70'),
          new Tooltip.line('Requires Level 70'),
          new Tooltip.line('Equip: Increases attack power by 50.', { className: 'tooltip-text-green' }),
        ]),

        new Tooltip.group([
          new Tooltip.line('Beast Lord Armor (0/5)', { className: 'tooltip-text-yellow' }),
          new Tooltip.line('Beast Lord Cuirass', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Beast Lord Handguards', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Beast Lord Helm', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Beast Lord Leggings', { className: 'tooltip-text-grey' }),
          new Tooltip.line('Beast Lord Mantle', { className: 'tooltip-text-grey' }),
        ]),

        new Tooltip.group([
          new Tooltip.line('(2) Set : Reduces the cooldown on your traps by 4 sec.'),
          new Tooltip.line('(4) Set : Each time you use your Kill Command ability, your attacks ignore 600 of your victim\'s armor for 15 sec.'),
          new Tooltip.line('Sell Price: 3 89 40'),
        ]),

        new Tooltip.line('Source: The Mechanar - Mechano-Lord Capacitus', { className: 'tooltip-space' }),
      ]
    }
  ]
}
