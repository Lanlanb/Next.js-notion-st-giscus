import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '151c813f9c5480ae8153c9bd2b390830',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Bulan\' Blog',
  domain: 'nurlaelabulan.my.id',
  author: 'Bulan. N',

  // open graph metadata (optional)
  description: 'Bulan\' Blog',

  // social usernames (optional)
  // twitter: '#',
  github: 'Lanlanb',
  linkedin: 'bulan-nurlaela',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Proyek',
      pageId: 'All-project-151c813f9c5480ccb0aed42d5dd21ac0'
    },
    {
      title: 'Post',
      pageId: 'Postingan-Saya-13dc813f9c5481df8f42d69cb76d38d8'
    },
    {
      title: 'About',
      pageId: 'About-13dc813f9c5481d8b258c10555e24785'
    },
    {
      title: 'Get in Touch',
      pageId: 'Get-in-Touch-140c813f9c5480c49e9ad6700cbb75b9'
    }
  ],

  giscus: {
    repo: 'Lanlanb/my-notion',
    repoId: 'R_kgDONP10tw',
    category: 'Comments',
    categoryId: 'DIC_kwDONP10t84Cp1fa',
    mapping: 'pathname',
    theme: 'preferred_color_scheme',
    darkTheme: 'dark_dimmed',
    lang: 'id'
  }
})
