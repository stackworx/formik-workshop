module.exports = {
  title: 'Formik Workshop',
  tagline: 'Build forms in React, without the tears.',
  url: 'https://stackworx.github.io',
  baseUrl: '/formik-workshop/',
  favicon: 'img/favicon.ico',
  organizationName: 'stackworx',
  projectName: 'formik-workshop',
  scripts: [
    {
      src: '/formik-workshop/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  themeConfig: {
    navbar: {
      title: 'Formik Workshop',
      links: [
        {
          to: 'docs/getting-started',
          activeBasePath: 'docs',
          label: 'Getting Started',
          position: 'left',
        },
        {
          href: 'https://github.com/stackworx/formik-workshop',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Formik Docs',
              to: 'https://formik.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              to: 'https://stackworx.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/stackworx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Formik Workshop, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/stackworx/formik-workshop/edit/master/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
