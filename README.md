# Introduction
This document will walk you through setup & editing documents, plus website deployment.

The structure of this repository is:

```
civity-docs-edit 
(one folder per instance/product)
|    ├── slibeheer
|    |   └── somefiles.md
|    |   └── /assets
|    |
|    ├── slimelden
|    |   └── somefiles.md
|    |   └── /assets
|    |
|    ├── other products
|    |   └── somefiles.md
|    |   └── /assets
└── website
    ├──i18n (contains files for the multi-language setup. More details are provided in this documentation)
    │   ├── en
    │   ├── nl
    │   └── sv
    ├── src
    │   ├── css
    │   ├── pages
    │   └── theme
    ├── static
    ├── docusaurus.config.js
    ├── package.json
    ├── package-lock.json
    ├── sidebars.js
    ├── versions.json   
  (every instance that is versioned will have the two folders below)
    ├── versioned_docs
          ├── version-1.1.0
      │   │   ├── foo
      │   │   │   └── bar.md
      │   │   └── hello.md
      │   └── version-1.0.0
      │       ├── foo
      │       │   └── bar.md
      │       └── hello.md
    ├── versioned_sidebars
        │   ├── version-1.1.0-sidebars.json
        │   └── version-1.0.0-sidebars.json 

```

### Requirements
* A Github account with access to the CivityNL organization. You will work with `civity-docs-edit` and `civity-docs` repositories
* GitHub account should have a Civity SSH Key and a personal token.
     
If your Github SSH key and personal token have expired (or you've never generated those), please follow the steps below:

    1. If your SSH has expired, please follow these [steps](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
    2. During the deployment, you will also be asked to provide a personal access token. This token can be generated on [this link](https://github.com/settings/tokens)

* NodeJS version 16.14 or above installed (https://nodejs.org/en/)
* Docusaurus (https://docusaurus.io/) - Run the `npm i docusaurus` command.


### Installation
1. Clone this repository to a location of your choice
2. `cd` to `~/website` and run `npm install` to install dependencies.
3. To run a local dev server, execute `npm start` in the  `~/website` folder
4. Open a new browser at: `localhost:3000`


# Updating documentation
 
Please remember to follow the template located at: `template.md`. Docusaurus v2 uses MDX as the standard format. Make sure you have the correct syntax


 ### Working with multi-instance setup

We've decided to separate our documentation into docusaurus instances. Every product should be a separate instance created on docusaurus.config.js Please follow [this documentation](https://docusaurus.io/docs/docs-multi-instance) to create a new instance. We use '@docusaurus/preset-classic' for our root instance called 'docs'. You will add the other instances required as '@docusaurus/plugin-content-docs' inside 'plugins' array.


 ### Updating documentation and creating a new version

After every product release, a release note should be added to the product folder. If necessary, you should also make adjustments to the product documentation.
You will need to create a new version for that instance, following the exact version of the product. Ex: if you just released version 8.1 of Slimmelden, the new version of Slimmelden docusaurus instance should also be named 8.1

 To create a new version: `npm run docusaurus docs:version VERSION_NUMBER`. If you have any doubt, please consult: https://docusaurus.io/docs/versioning


### Translations

Docs Civity currently supports English, Dutch and Swedish. If a new language needs to be added, please follow the [step-by-step](https://docusaurus.io/docs/i18n/tutorial). After every change on the documentation and release notes, please remember to add those to the three languages mentioned.


You should first create a folder *with the same name* of the current version inside the instance subfolder: Ex:

`mkdir -p /website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-3.5.0`

After that, the translated MDX files should be copied to the recently created folder:

`cp -r docs/** /website/i18n/nl/docusaurus-plugin-content-docs-dataplatform/version-3.5.0`. 


Remember to also copy the assets folder, and make necessary adjustments to the files.

To run locally , use the following command:

`npm run start -- --locale nl`

>Each locale is a distinct standalone single-page application: it is not possible to start the Docusaurus sites in all locales at the same time.


# Pushing and deploying

### Pushing updates to civity-docs-edit
> **IMPORTANT** 
>
> Ensure you've met and executed the requirements and installation instructions above.
>
> Ensure you're on the "drafts" branch. You can confirm this by running `git branch -a' to see your current branch. To change branches, run `git checkout drafts`

1. Add files as usual; `git add .`
2. Commit staged files; `git commit -m "YOUR-COMMIT-MESSAGE-HERE"`
3. `git push`

Your changes will be pushed to `civity-docs-edit` drafts branch.

<!-- ### Updating the head of civity-docs-edit:
> **IMPORTANT**
>
> This will change the current head of submodule `civity-docs-edit` in the master repository!!
>
> The following steps will set the `civity-docs-edit` submodule to *always* be tracked - in most cases, this is not necessary.

1. Follow the installation steps 1; 2; and 3, followed by pushing any updates to the submodule repository ("Pushing Updates to civity-docs-edit" - steps 1, 2, and 3)
2. `cd` to `~/` and execute `git status`. You should see `modified: civity-docs-edit (new commits)` in red. 
3. Execute `git add civity-docs-edit`, followed by `git status`. You should now see `modified: civity-docs-edit` in green.
4. Execute `git commit -m "YOUR-COMMIT-MESSAGE-HERE"`
5. Execute `git push` -->


### Deploying Website
> Ensure your GitHub account has write access to `civity-docs. If you do not have access, you will not be able to deploy.
1. **Open Git Bash** and `cd` to `~/website` in your local repository. This command will fail in any terminal (on windows) outside GitBash.

2. Run the following command in Git Bash: `$ GIT_USER=YOUR_USER_ACCOUNT npm run deploy`. 

You will need to insert your Github credentials first, and then your personal token (mentioned in the Requirements section of this document)
This may take upwards of 60 seconds. If you see a final line stating: `Website is live at: https://CivityNL.github.io/civity-docs`, you have successfully deployed it. Else, check the error/error log. 

If you cannot deploy, double-check commas in your custom CSS or any JSON files.

### Issues
If Git Bash says there is nothing to update, but changes have been made to the website's core code (ex. changing `index.js`), you may need to delete your local build folder at `~/website/build`. After deletion, run `$ GIT_USER=YOUR_USER_ACCOUNT npm run deploy`; the entire repository should be overwritten.

### Algolia Search Config
>Alogolia search config located at:
>
> [https://github.com/algolia/docsearch-configs/blob/master/configs/civitynl.json](https://github.com/algolia/docsearch-configs/blob/master/configs/civitynl.json)

Algolia is a 3rd party provider who handles our search functionality.

#### Config:

```{
  startUrls: [
    "https://www.docs.civity.nl/",
    "https://www.docs.civity.nl/Welcome",
  ],
  renderJavaScript: false,
  sitemaps: ["https://civitynl.github.io/civity-docs/sitemap.xml"],
  exclusionPatterns: [],
  ignoreCanonicalTo: false,
  discoveryPatterns: ["https://www.docs.civity.nl/**"],
  schedule: "at 11:10 on Tuesday",
  actions: [
    {
      indexName: "civitynl",
      pathsToMatch: [
        "https://www.docs.civity.nl/**",
        "https://www.docs.civity.nl/Welcome**/**",
      ],
      recordExtractor: ({ $, helpers }) => {
        // Removing DOM elements we don't want to crawl
        const toRemove = ".hash-link";
        $(toRemove).remove();

        return helpers.docsearch({
          recordProps: {
            lvl1: ".post h1",
            content: ".post article p, .post article li",
            lvl0: {
              selectors: ".navGroup > h3.collapsible",
              defaultValue: "Documentation",
            },
            lvl2: ".post h2",
            lvl3: ".post h3",
            lvl4: ".post h4",
            lvl5: ".post h5",
          },
          indexHeadings: true,
        });
      },
    },
  ],
  initialIndexSettings: {
    civitynl: {
      attributesForFaceting: ["type", "lang", "language", "version"],
      attributesToRetrieve: ["hierarchy", "content", "anchor", "url"],
      attributesToHighlight: ["hierarchy", "hierarchy_camel", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "hierarchy_radio", "content"],
      searchableAttributes: [
        "unordered(hierarchy_radio_camel.lvl0)",
        "unordered(hierarchy_radio.lvl0)",
        "unordered(hierarchy_radio_camel.lvl1)",
        "unordered(hierarchy_radio.lvl1)",
        "unordered(hierarchy_radio_camel.lvl2)",
        "unordered(hierarchy_radio.lvl2)",
        "unordered(hierarchy_radio_camel.lvl3)",
        "unordered(hierarchy_radio.lvl3)",
        "unordered(hierarchy_radio_camel.lvl4)",
        "unordered(hierarchy_radio.lvl4)",
        "unordered(hierarchy_radio_camel.lvl5)",
        "unordered(hierarchy_radio.lvl5)",
        "unordered(hierarchy_radio_camel.lvl6)",
        "unordered(hierarchy_radio.lvl6)",
        "unordered(hierarchy_camel.lvl0)",
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy_camel.lvl1)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy_camel.lvl2)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy_camel.lvl3)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy_camel.lvl4)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy_camel.lvl5)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy_camel.lvl6)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
});
```
