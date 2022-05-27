/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock: props => <div {...props}></div>,
  MarkdownBlock: props => <div {...props}></div>
};

import Layout from "@theme/Layout";

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const {config: siteConfig} = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `https://github.com/CivityNL/civity-docs-edit/blob/drafts/javascript/users.js`;
    const showcase = siteConfig.users.map(user => (
      <a href={user.infoLink} key={user.infoLink}>
        <img src={user.imageStyle} alt={user.caption} title={user.caption} />
      </a>
    ));

    return (
      <div className="mainContainer">
        <Container padding={['bottom']}>
          <div className="showcaseSection">
            {/* <div className="prose"> */}
            <div className="productShowcaseSection">
              <h2>Who is Using This?</h2>
              <p>We work with all of the fine people at:</p>
            </div>
            <div className="logos" style={{paddingTop: '1vh'}}>{showcase}</div>
            <p style={{paddingTop: '2vh'}}>Are you building great things with us?</p>
            <a href={editUrl} className="button">
              Add your company
            </a>
          </div>
        </Container>
      </div>
    );
  }
}

export default props => <Layout><Users {...props} /></Layout>;
