import React, { useState } from 'react'

function renderSetPiece(item) {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  if (
    !item.hasOwnProperty('tooltip') ||
    !item.hasOwnProperty('quality') ||
    !item.hasOwnProperty('icon')
  ) {
    return ''
  }

  return (
    <>
      <img
        src={item.icon}
        onMouseEnter={() => { setTooltipVisible(true) }}
        onMouseLeave={() => { setTooltipVisible(false) }}
        className={`border-${item.quality}`}
      />
      <div className={`item-tooltip border-${item.quality}`} style={{display: tooltipVisible ? 'block' : 'none' }}>
        {item.tooltip.map(line => {
          return line.toString()
        })}
      </div>
    </>
  )
}

export default function EquipmentSetShortWithTooltips({ set }) {
  return <div className='equipment-set-short'>
  {
    set.map(setpiece => {
      return (
        renderSetPiece(setpiece)
      )
    })
  }
  </div>
}
