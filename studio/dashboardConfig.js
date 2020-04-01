export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e84900840181bcc1dff3ddb',
                  title: 'Sanity Studio',
                  name: 'lop-mot-korona-studio',
                  apiId: '4175b185-b48c-4342-b6c8-9c5d5a048c09'
                },
                {
                  buildHookId: '5e84900840181be952ff3d48',
                  title: 'Landing pages Website',
                  name: 'lop-mot-korona',
                  apiId: 'bdd1c18a-68bc-4452-85cb-aba6438bfef7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/roberthaugen/lop-mot-korona',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://lop-mot-korona.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
