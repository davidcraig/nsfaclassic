import { DiscussionEmbed } from "disqus-react"

const DisqusComments = ({ page }) => {
  const disqusConfig = {
    url: page.url,
    identifier: page.slug, // Page slug
    title: page.title // Page title
  }

  return (
    <div>
      <DiscussionEmbed
        shortname={"nsfaclassic"}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;
