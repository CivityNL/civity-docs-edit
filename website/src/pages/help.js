/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

// const CompLibrary = {
//   Container: (props) => <div {...props}></div>,
//   GridBlock: (props) => <div {...props}></div>,
//   MarkdownBlock: (props) => <div {...props}></div>,
// };

import Layout from "@theme/Layout";

// const Container = CompLibrary.Container;
// const GridBlock = CompLibrary.GridBlock;

function Help(props) {
  const { config: siteConfig, language = "" } = props;
  const { baseUrl, docsUrl } = siteConfig;
  const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
  const langPart = `${language ? `${language}/` : ""}`;
  const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

  // const supportLinks = [
  //   {
  //     content: `[Civity Servicedesk](https://onetrail.atlassian.net/servicedesk/customer/portal/7) (login required)`,
  //     title: "Report a bug or feature request",
  //     imageStyle: `${baseUrl}img/help/undraw_feedback_300px.png`,
  //     imageStyleAlign: "top",
  //   },
  //   {
  //     content: `[Subscribe to our newsletters](https://civity.nl/aanmelden-nieuwsbrief)`,
  //     imageStyle: `${baseUrl}img/help/undraw_type_300px.png`,
  //     title: "Stay up to date",
  //     imageStyleAlign: "top",
  //   },
  // ];

  return (
    <div class="container" style= {{paddingTop: '5%' }} >
      <h1>Need help?</h1>
      <p>
        This project is maintained by a dedicated group of people at Civity.
      </p>
      <div class="row">
        <div class="col col--6">

          <div class="card-demo">
            <div class="card">
              <div class="card__header">
                <h3>Report a bug or feature request</h3>
              </div>
              <div class="card__body">
              <a class="button-front-Page" target="_blank" href="https://civity.atlassian.net/servicedesk/customer/portals">Civity Servicedesk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (props) => (
  <Layout>
    <Help {...props} />
  </Layout>
);
