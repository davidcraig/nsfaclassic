import React from 'react'
import Index from '../pages/index'
import renderer from 'react-test-renderer'

test('Home page includes json-ld', () => {
  const guildName = 'Not Safe for Azeroth'
  const guildUrl = 'https://nsfa-classic.netlify.app/'
  const Renderer = renderer.create(
    <Index />
  )

  const instance = Renderer.root;
  const script = instance.findByType('script')

  expect(script.type).toEqual('script')
  expect(script.props.type).toEqual('application/ld+json')
  expect(script.props.dangerouslySetInnerHTML.__html).toMatch('"@context":"https://schema.org"')
  expect(script.props.dangerouslySetInnerHTML.__html).toMatch('"@type":"Organization"')
  expect(script.props.dangerouslySetInnerHTML.__html).toMatch(`"name":"${guildName}"`)
  expect(script.props.dangerouslySetInnerHTML.__html).toMatch(`"url":"${guildUrl}"`)
})
