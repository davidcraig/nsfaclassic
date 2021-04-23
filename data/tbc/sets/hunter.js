const HELM = 'helm'

class TooltipLine {
  constructor(text, options = {}) {
    this.text = text
    this.className = false
    if (options.className) {
      this.className = options.className
    }
  }

  toString() {
    if (!!this.className) {
      return <p className={this.className}>{this.text}</p>
    }
    return <p>{this.text}</p>
  }
}

export default {
  dungeon: [
    {
      name: 'Beast Lord Helm',
      icon: '/img/wow/items/equipment/inv_helmet_19.jpg',
      slot: HELM,
      quality: 'rare',
      itemId: 28275,
      tooltip: [
        new TooltipLine('Item Level 115', { className: 'tooltip-text-yellow' }),
        new TooltipLine('Binds when picked up'),
        new TooltipLine('Head'),
        new TooltipLine('Mail'),
        new TooltipLine('530 Armor'),
        new TooltipLine('+25 Agility'),
        new TooltipLine('+21 Stamina'),
        new TooltipLine('+22 Intellect'),

        new TooltipLine('Red Socket', { className: 'tooltip-text-grey' }),
        new TooltipLine('Meta Socket', { className: 'tooltip-text-grey' }),
        new TooltipLine('Socket Bonus: 2 mana per 5 sec.', { className: 'tooltip-text-grey' }),

        new TooltipLine('Durability 70 / 70', { className: 'tooltip-space' }),
        new TooltipLine('Requires Level 70'),
        new TooltipLine('Equip: Increases attack power by 50.'),

        new TooltipLine('Beast Lord Armor (0/5)', { className: 'tooltip-text-yellow tooltip-space' }),
        new TooltipLine('Beast Lord Cuirass', { className: 'tooltip-text-grey' }),
        new TooltipLine('Beast Lord Handguards', { className: 'tooltip-text-grey' }),
        new TooltipLine('Beast Lord Helm', { className: 'tooltip-text-grey' }),
        new TooltipLine('Beast Lord Leggings', { className: 'tooltip-text-grey' }),
        new TooltipLine('Beast Lord Mantle', { className: 'tooltip-text-grey' }),

        new TooltipLine('(2) Set : Reduces the cooldown on your traps by 4 sec.', { className: 'tooltip-space' }),
        new TooltipLine('(4) Set : Each time you use your Kill Command ability, your attacks ignore 600 of your victim\'s armor for 15 sec.'),
        new TooltipLine('Sell Price: 3 89 40'),

        new TooltipLine('Source: The Mechanar - Mechano-Lord Capacitus', { className: 'tooltip-space' }),
      ]
    }
  ]
}
