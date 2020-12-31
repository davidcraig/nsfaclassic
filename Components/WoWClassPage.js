import Page from './PageWithWidgets'

function RenderDiscord(discord) {
  return <a href={discord} target='_blank'>{discord}</a>
}

function RenderDiscords(discord) {
  if (!discord) {
    return false
  }

  if (Array.isArray(discord)) {
    return <p>Discords: <ul>{discord.map(d => <li>{RenderDiscord(d)}</li>)}</ul></p>
  }

  return <p>Discord: {RenderDiscord(discord)}</p>
}

export default function WoWClassPage(props) {
  const css = props.class.css
  const name = props.class.name
  const discord = RenderDiscords(props.discord)

  return (
    <Page>
      <h1 className={`h1 fg-${props.class.css}`}>{props.class.name}</h1>
      {discord}
    </Page>
  )
}
