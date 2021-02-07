import React from 'react'
import PageWithWidgets from '../Components/PageWithWidgets'

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://notsafeforazeroth.netlify.app/",
    "name": "Not Safe for Azeroth",
    "description": "A World of Warcraft guild on Silvermoon EU."
  }

  return <PageWithWidgets>
    <h1 className='h1'>&lt;Not Safe for Azeroth&gt;</h1>
    <p>A raiding guild aiming at heroic progression, the name is a play on the phrase "Not Safe for Work" as we are a dark humoured guild so we recruit only players who have a sense of humour and aren't easily offended (aka no snowflakes).</p>
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  </PageWithWidgets>
}
