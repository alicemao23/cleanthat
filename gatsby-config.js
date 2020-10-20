const contentful = require('contentful')
const manifestConfig = require('./manifest-config')
require('dotenv').config()

const { ACCESS_TOKEN, SPACE_ID, ANALYTICS_ID, DETERMINISTIC } = process.env

// TODO: Fix import of access token and IDs
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})
const getAboutEntry = (entry) => entry.sys.contentType.sys.id === 'about'

const plugins = [
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-manifest',
    options: manifestConfig
  },
  'gatsby-plugin-styled-components',
  {
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: SPACE_ID,
      accessToken: ACCESS_TOKEN
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'fonts',
      path: `${__dirname}/static/fonts/`
    }
  },
  {
    resolve: `gatsby-plugin-layout`,
    options: {
      component: require.resolve(`./src/components/Layouts`)
    }
  },
  'gatsby-transformer-remark',
  'gatsby-plugin-offline'
]

module.exports = client
  .getEntries()
  .then((entries) => {
    const { mediumUser } = entries.items.find(getAboutEntry).fields

    plugins.push({
      resolve: 'gatsby-source-medium',
      options: {
        username: mediumUser || '@medium'
      }
    })

    if (ANALYTICS_ID) {
      plugins.push({
        resolve: 'gatsby-plugin-google-analytics',
        options: {
          trackingId: ANALYTICS_ID
        }
      })
    }

    return {
      siteMetadata: {
        isMediumUserDefined: !!mediumUser,
        deterministicBehaviour: !!DETERMINISTIC
      },
      plugins
    }
  })
  .catch((err) => console.log('error:', err))
