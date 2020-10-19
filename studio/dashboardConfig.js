export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8d6841dafb121ab02c72e0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-test-1-studio',
                  apiId: 'e0d32792-647f-4716-96e3-ea4aeb7eb2bf'
                },
                {
                  buildHookId: '5f8d684137b24b1f962c848e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-test-1',
                  apiId: '59a9ead7-0bc3-4f50-9585-c14e5ef30890'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chug2k/sanity-gatsby-portfolio-test-1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-test-1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
