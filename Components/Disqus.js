import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ page }) => {
  const shortname = "nsfaclassic"
  const disqusConfig = {
    url: page.url,
    identifier: page.slug, // Page slug
    title: page.title, // Page title
    language: 'en_GB'
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={shortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;
