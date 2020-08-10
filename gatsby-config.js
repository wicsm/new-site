const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'WiCSM',
    description: 'my theme',
    contact: {
      phone: 'XXX XXX XXX',
      email: 'wicsm@gmail.com',
    },
    menuLinks: [
      {
        name: 'Events',
        link: '/events',
      },
      {
        name: 'Team',
        link: '/team',
      },
      {
        name: 'Office Hours',
        link: 'https://utsccms.club/calendar',
      },
      {
        name: 'Contact',
        link: '/contact',
      },

    ],
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid ? guid : 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
