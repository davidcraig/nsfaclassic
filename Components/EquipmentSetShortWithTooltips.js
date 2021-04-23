import React, { useState } from 'react'

function renderSetPiece(item) {
  const [tooltipVisible, setTooltipVisible] = useState(true)

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
  return set.map(setpiece => {
    return (
      renderSetPiece(setpiece)
    )
  })
}
