export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'Netlify deploys',
        sites: [
          // {
          //   title: 'Sanity Studio',
          //   apiId: 'xxxxx-yyyy-zzzz-xxxx-yyyyyyyy',
          //   buildHookId: 'xxxyyyxxxyyyyxxxyyy',
          //   name: 'sanity-gatsby-blog-20-studio',
          // },
          {
            title: 'Production',
            apiId: 'd090f3a9-2767-41b8-8dc1-6e72370b6316',
            buildHookId: '5f9d8c12b1c666b6f77927a1',
            name: 'suggestion',
          },
          // {
          //   title: 'Staging',
          //   apiId: 'd090f3a9-2767-41b8-8dc1-6e72370b6316',
          //   buildHookId: '5f43d2687dc19c67dc44420f',
          //   name: 'suggestion',
          // },
        ],
      },
    },
  ],
};
