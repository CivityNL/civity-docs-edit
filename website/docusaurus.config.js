module.exports = {
  "title": "Civity Docs",
  "tagline": "",
  "url": "https://CivityNL.github.io/civity-docs",
  "baseUrl": "/",
  "organizationName": "CivityNL",
  "projectName": "civity-docs",
  "scripts": [
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "https://github.com/CivityNL/civity-docs/blob/gh-pages/js/code-block-buttons.js"
  ],
  "favicon": "img/civityHexLogo.png",
  "customFields": {
    "users": [
    ],
    "markdownPlugins": [
      null
    ],
    "ogimageStyle": "",
    "twitterimageStyle": ""
  },
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "../intro",
          // "editUrl": "https://github.com/CivityNL/civity-docs-edit/edit/drafts/",
          "sidebarPath": require.resolve('./sidebars.js'),
          "routeBasePath": 'docs',
          "remarkPlugins": [],
          "rehypePlugins": [],
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve('./static/css/custom.css')],
        }
      }
    ]
  ],
  "plugins": [
    [
      '@docusaurus/plugin-content-docs',
      {
        "id": 'dataplatform',
        "path": '../dataplatform',
        "routeBasePath": 'dataplatform',
        "sidebarPath": undefined,
        "showLastUpdateAuthor": true,
        "showLastUpdateTime": true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        "id": 'datacatalogus',
        "path": '../datacatalogus',
        "routeBasePath": 'datacatalogus',
        "sidebarPath": undefined,
        "showLastUpdateAuthor": true,
        "showLastUpdateTime": true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        "id": 'slimmelden',
        "path": '../slimmelden',
        "routeBasePath": 'slimmelden',
        "sidebarPath": undefined,
        "showLastUpdateAuthor": true,
        "showLastUpdateTime": true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        "id": 'slimbeheer',
        "path": '../slimbeheer',
        "routeBasePath": 'slimbeheer',
        "sidebarPath": undefined,
        "showLastUpdateAuthor": true,
        "showLastUpdateTime": true,
      },
    ],
  ],
  "themeConfig": {
    "navbar": {
      "title": "Civity Docs",
      "items": [
        {
          "to": "docs/Welcome",
          "label": "Welcome",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "right"
        },
        {
          "to": "/dataplatform/dataplatform_introduction",
          "label": "Dataplatform Portal",
          "position": "left",
        },
        {
          "to": "/datacatalogus/korte_intro",
          "label": "Data Catalogus",
          "position": "left",
        },
        {
          "to": "/slimmelden/slimmelden",
          "label": "Slimmelden",
          "position": "left",
        },
        {
          "to": "/slimbeheer/slimbeheer",
          "label": "Slimbeheer",
          "position": "left",
        },
        {
          "type": 'localeDropdown',
          "position": 'right',
        },
      ]
    },
    "footer": {
      "links": [],
      "copyright": "Copyright © 2022 Civity B.V.",
      "logo": {
        "src": "img/civityHexLogo.png"
      }
    },
    "algolia": {
      "apiKey": "b26499f361705dc5a4b74fe6c1663f75",
      "indexName": "civitynl",
      "appId": "BH4D9OD16A",
      "contextualSearch": true,
    },
    "colorMode": {
      "defaultMode": 'light',
      "disableSwitch": true,
      "respectPrefersColorScheme": true,
    },
   
  },
  "i18n": {
    "defaultLocale": 'en',
    "locales": ['en', 'nl', 'sv'],
    "localeConfigs": {
      "en": {
        "htmlLang": 'en-GB',
      },
      "nl": {
        "htmlLang": 'nl',
      },
      "sv": {
        "htmlLang": 'sv',
      },
    },
  },
}