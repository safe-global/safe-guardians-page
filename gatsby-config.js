const path = require('path')
require('dotenv').config()

module.exports = {
  siteMetadata: {
    site: `Safe Guardians`,
    description: `This page is dedicated to the Safe Guardians program, a program designed to reward active members of the Safe community, who use their powers to contribute positively to the ecosystem`,
    siteUrl: `https://guardians.gnosis-safe.io`,
    language: `en`,
    color: `#ffffff`,
    twitter: 'gnosisSafe',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-client-side-redirect`
  ],
}
