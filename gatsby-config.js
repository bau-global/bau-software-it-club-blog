module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
      }
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `BAU Yazılım ve Bilişim Kulübü`,
    author: `BUYABI`,
    description: `Bahçeşehir Üniversitesi Yazılım ve Bilişim Kulübünün etkinliklerini paylaştığı blog sayfasıdır.`,
    social: [
      {
        name: `github`,
        url: `https://github.com/bau-global`,
      },
      {
        name: `twitter`,
        url: `https://twitter.com/buyabi`,
      },
      {
        name: `instagram`,
        url: `https://www.instagram.com/bauyazilim`,
      },
      {
        name: `facebook page`,
        url: `https://facebook.com/pg/buyabi/about`,
      },
      {
        name: `facebook group`,
        url: `https://www.facebook.com/groups/buyabi`,
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/groups/4214425`,
      },
    ],
  },
}