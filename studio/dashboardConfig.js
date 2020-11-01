export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f9ecfe2b20276f2854712da',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-buk1xfcr',
                  apiId: '85cf85df-f627-4616-8a11-26d092199769'
                },
                {
                  buildHookId: '5f9ecfe236a6753981d11702',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-s4h5avcc',
                  apiId: 'c1b97289-2c3d-408b-949a-a9522fa79c06'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mschork/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-s4h5avcc.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
