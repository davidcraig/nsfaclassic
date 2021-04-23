export class TooltipLine {
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

export class TooltipGroup {
  constructor(lines) {
    this.lines = lines
    this.lines[0].className = this.lines[0].className
      ? `${this.lines[0].className} tooltip-space`
      : 'tooltip-space'
  }

  toString() {
    return this.lines.map(line => {
      return line.toString()
    })
  }
}

export default {
  line: TooltipLine,
  group: TooltipGroup
}
