import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `My First blog-KoJungHoon gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    author: "starcoex company",
    description: "Starcoex awesome Gatsby site.",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    // `gatsby-transformer-remark`,
    // "gatsby-remark-reading-time",
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-plugin-styled-components`,
    //   options: {
    //     // Add any options here
    //   },
    // },

    // {
    //   resolve: `gatsby-plugin-mdx`,
    //   options: {
    //     gatsbyRemarkPlugins: [...],
    //     remarkPlugins: [...],
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [`gatsby-remark-reading-time`],
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },

    // {
    //   resolve: `gatsby-plugin-emotion`,
    //   options: {
    //     // Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
    //     // The values for each key in this example are the defaults the plugin uses.
    //     sourceMap: true,
    //     autoLabel: "dev-only",
    //     labelFormat: `[local]`,
    //     cssPropOptimization: true,
    //   },
    // },
  ],
};

export default config;
