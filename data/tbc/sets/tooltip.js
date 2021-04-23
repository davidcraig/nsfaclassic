export class TooltipLine {
  constructor(text, options = {}) {
    this.text = text
    if (options.className) {
      this.className = options.className
    }
  }

  className() {
    return this.className
  }

  addClass(c) {
    this.className = `${this.className} ${c}`
  }

  toString() {
    if (this.hasAnyClass()) {
      return <p className={this.className}>{this.text}</p>
    }
    return <p>{this.text}</p>
  }

  hasClass(className) {
    if (!Object.prototype.hasOwnProperty.call(this, 'className')) {
      return false
    }
    return this.className.match(className)
  }

  hasAnyClass() {
    return Object.prototype.hasOwnProperty.call(this, 'className')
  }
}

export class TooltipGroup {
  constructor(lines) {
    console.log(lines)
    console.log(lines[0])
    if (!lines[0].hasAnyClass()) {
      lines[0].className = 'tooltip-space'
    } else {
      if (!lines[0].hasClass('tooltip-space')) {
        lines[0].addClass('tooltip-space')
      }
    }
    this.lines = lines
  }

  toString() {
    return this.lines.map(line => {
      return line.toString()
    })
  }
}

export default {
  line: TooltipLine,
  group: TooltipGroup,
  socket: {
    red: () => new TooltipLine('Red socket', { className: 'tooltip-text-grey socket-red' }),
    blue: () => new TooltipLine('Blue socket', { className: 'tooltip-text-grey socket-blue' }),
    yellow: () =>  new TooltipLine('Yellow socket', { className: 'tooltip-text-grey socket-yellow' }),
    meta: () =>  new TooltipLine('Meta socket', { className: 'tooltip-text-grey socket-meta' })
  }
}
