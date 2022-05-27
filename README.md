# Introduction
This document will walk you through setup & editing documents, plus website deployment.

The structure of this repository is somewhat complex, as it contains a submodule (a repository inside a repository)
```
root-directory (repository)
├── civity-docs-edit (SUBMODULE; repository)
|    ├── someDirectory1
|    |   └── somefiles.jpg
|    |
|    ├── someOtherDirectory
|        └── otherFiles.jpg
└── website
    ├── src
    │   ├── components
    │   ├── css
    │   └── pages
    ├── static
    ├── package.json
    ├── package-lock.json
    ├── sidebars.json
    ├── docusaurus.config.js
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
    ├──i18n
```

### Requirements
* A github account with access to `civity-docs-edit` and `civity-docs` repositories; ask Michael for an invite to the Documentation Team.
* Both GitLab and GitHub account should have a SSH Key associated with it.
* NodeJS installed (https://nodejs.org/en/)
* Docusaurus (https://docusaurus.io/) - Run the `npm i docusaurus` command.
* If your Github token has expired, please follow the steps bellow to generate new token:
    1. Navigate to: https://github.com/settings/profile
    2. Select tab on the left, 'SSH and GPG keys': https://github.com/settings/keys

### Installation
1. Clone this repository to a location of your choice, with the following command: `git clone --recurse-submodules -j8 git@gitlab.onetrail.net:Civity/civity-documentation-project-code-backup.git` <== **VERY IMPORTANT**
2. `cd` to `~/website` and run `npm install` to install dependencies.
3. Once that has completed, go back to `~` and `cd` to `~/civity-docs-edit`; execute `git pull` to update to the latest commit. Ensure you're in the **drafts** branch of the `civity-docs-edit` repository! ***Note: you must have a github account and access to the CivityNL organization account to execute this command***
4. To run a local dev server, execute `npm start` in the  `~/website` folder
5. Open a new browser at: `localhost:3000`.

# Updating documentation
 
 Please remeber to follow the template located at: `civity-docs-edit/template.md`. Docusaurus version 2, uses MDX as the standard format. Make sure you have the correct syntax, otherwise it won't be compiled.
 ### Version

 After every release, a release note should be added and changes on MDX shoudl be made if necessary. After the update, a new version of docs.civity.nl should be created and released.

 To create a new version : `npm run docusaurus docs:version VERSION_NUMBER` . If you have any doubt, please consult: https://docusaurus.io/docs/versioning

 To release a new version, please follow the steps written below.


### Translations

-Our project currently supports English, Dutch and Swedish. If a new language should be added, please follow the step-by-step from : https://docusaurus.io/docs/i18n/tutorial

- All MDX files should be translated and then copied to the respective locale folder - Like for example for Swedish: `/website/i18n/sv/docusaurus-plugin-content-docs/current`

- Remember to update the translations for all languagues everytime there is a pertinent update.


# Pushing and deploying

### Pushing updates to civity-docs-edit submodule
> **IMPORTANT** 
>
> Ensure you've met and executed the requirements and installation instructions above.
>
> Ensure you're on the "drafts" branch. You can confirm this by running `git branch -a` to see your current branch. To change branches, run `git checkout drafts`

1. `cd` to `~/civity-docs-edit` and add files as normal; `git add .`
2. Commit staged files; `git commit -m "YOUR-COMMIT-MESSAGE-HERE"`
3. `git push`

Your changes will be pushed to `civity-docs-edit` drafts branch.

### Updating the head of civity-docs-edit:
> **IMPORTANT**
>
> This will change the current head of submodule `civity-docs-edit` in the master repository!!
>
> The following steps will set the `civity-docs-edit` submodule to *always* be tracked - in most cases, this is not necessary.

1. Follow the installation steps 1; 2; and 3, followed by pushing any updates to the submodule repository ("Pushing Updates to civity-docs-edit" - steps 1, 2, and 3)
2. `cd` to `~/` and execute `git status`. You should see `modified: civity-docs-edit (new commits)` in red. 
3. Execute `git add civity-docs-edit`, followed by `git status`.  You should now see `modified: civity-docs-edit` in green.
4. Execute `git commit -m "YOUR-COMMIT-MESSAGE-HERE"`
5. Execute `git push`


### Deploying Website
> Ensure your github account has write access to `civity-docs`. If you do not have access, you will not be able to deploy.
1. **Open Git Bash** and `cd` to `~/website` in your local repository. This command will fail in any terminal (on windows) outside of GitBash.

2. Run the following command in Git Bash: `$ GIT_USER=YOUR_USER_ACCOUNT npm run deploy`. You will be asked to provide your Github credentials, as well as a personal acess token. This can be generated on: https://github.com/settings/tokens.

This may take upwards of 60 seconds. If you see a final line stating: `Website is live at: https://CivityNL.github.io/civity-docs`, you have successfully deployed. Else, check the error/error log. 

If you are unable to deploy, doublecheck commas in your custom CSS or any JSON files.

### Issues
If Git Bash says there is nothing to update, but changes have been made to the website's core code (ex. changing `index.js`), you may need to delete your local build folder at `~/website/build`. After deletion, run `$ GIT_USER=YOUR_USER_ACCOUNT npm run deploy`; the entire repository should be overwritten.

### Algolia Search Config
>Alogolia search config located at:
>
> [https://github.com/algolia/docsearch-configs/blob/master/configs/civitynl.json](https://github.com/algolia/docsearch-configs/blob/master/configs/civitynl.json)

Algolia is a 3rd party provider, who handles our search functionality.

#### Config:

```
{
  "index_name": "civitynl",
  "start_urls": [
    "https://civitynl.github.io/civity-docs/docs/",
    "https://civitynl.github.io/civity-docs/docs/Welcome"
  ],
  "sitemap_urls": [
    "https://civitynl.github.io/civity-docs/sitemap.xml"
  ],
  "sitemap_alternate_links": true,
  "stop_urls": [],
  "selectors": {
    "lvl0": {
      "selector": "//*[contains(@class,'navGroups')]//*[contains(@class,'navListItemActive')]/preceding::h3[1]",
      "type": "xpath",
      "global": true,
      "default_value": "Documentation"
    },
    "lvl1": ".post h1",
    "lvl2": ".post h2",
    "lvl3": ".post h3",
    "lvl4": ".post h4",
    "lvl5": ".post h5",
    "text": ".post article p, .post article li"
  },
  "selectors_exclude": [
    ".hash-link"
  ],
  "custom_settings": {
    "attributesForFaceting": [
      "language",
      "version"
    ]
  },
  "conversation_id": [
    "822588727"
  ],
  "nb_hits": 188
}
```
