---
id: Slim Melden
title: Installation & Deployment
sidebar_label: Installation & Deployment
---

Slim Melden is an open and highly customizable smart reporting application, built to empower citizens to take charge of local matters - from defective street lights to broken bus shelters. The application is built using the widely accepted "Open 311" standard, which allows developers to begin straight away.

## Requirements

### NodeJS

> You must download and install the latest version of NodeJS, before acquiring Ionic.

Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm, unifying web application development around a single programming language, rather than different languages for server side and client side scripts.

> Proceeding further in this guide requires NPM package manager. This will come as part of NodeJS.

| Download NodeJS and NPM Package Manager|
| :------: |
|[Version 10.15.3 LTS (16mb)](https://nodejs.org/dist/v10.15.3/node-v10.15.3-x64.msi)|


### Ionic

Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using modern web technologies (HTML, CSS, and JavaScript).

**Ionic Cordova package can be installed by running the following command:**

```sh	
npm install -g ionic cordova	
```


## Develop

> Livereload servers should only be used for development purposes
   
If you intend to make changes to your code, it is wise to spin up a local development server which provides a livereload feature. 

**To start a local development server, follow these steps:**
   
1. remove the following snippet from your package.json file, found in the root of your project folder:

    ```js
     "config": {
        "ionic_webpack": 
        "./config/webpack.config.js"
    }
    ```
          

2. Set default configuration in `src\environments\common\environment.default.ts` and the customer in `src\environments\default.config.ts`
   

3. Lastly, execute the following command in the root directory of your project:

    ```sh
    ionic serve
    ```


## Deploy

Navigate to the project's root folder and run the following commands:

```sh
npm install
npm run ionic:build:{customer}:{environment}
```

You may customize your build with the following parameters for "customer" and "environment"

| Customer       | Environment         |  
| :------------- | :------------------ |
| `enschede`     | `dev` (default)     |
| `utrecht`      | `test`              |
| `vzg`          | `acc`               |
|                | `prod`              |

Once `npm run ionic:build:{customer}:{environment}` has finished, you can find the deployable sources in the "/www" folder.

```bash
MY-IONIC-APP
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── WWW
│   ├── ...
│   ├── ...
│   └── ...
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
```

   
## Environment Configuration

If you wish to configure the properties for a specific environment (ex. API urls, version, etc), the environment-specific configuration file must be modified  in the `src\environments\common` folder.

To configure customer specific settings, the configuration files can be found in `src\theme\{customer}\settings.ts`