module.exports = {
  community: [
    'support',
    'team',
    'security',
    'security-model',
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'doc',
        id: 'contributing/contributing',
      },
      collapsed: false,
      items: [
        'contributing/issues',
        'contributing/pull-request',
        'contributing/translation',
        'contributing/blog-post',
        'contributing/how-to-release',
      ],
    },
    {
      type: 'link',
      href: 'https://github.com/apache/answer/issues',
      label: 'Feature Request',
    },
    {
      type: 'link',
      href: 'https://github.com/apache/answer/projects',
      label: 'Roadmap',
    },
    {
      type: 'link',
      href: 'https://www.apache.org/logos/#answer',
      label: 'Logos',
    },
  ],
};
