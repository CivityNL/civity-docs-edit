
const React = require('react');

const CompLibrary = {
  Container: props => <div {...props}></div>,
  GridBlock: props => <div {...props}></div>,
  MarkdownBlock: props => <div {...props}></div>
};

import Layout from "@theme/Layout";

const MarkdownBlock = CompLibrary.MarkdownBlock;/* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
    

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle-custom">
        Find user guides, developer guides, and API references for the City Innovation Platform.
      </h2>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;


    const {docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;
    const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="left"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
    
    const FeatureCallout = () => (
      <div style={{ textAlign: 'center', padding: '0 4rem 6vh 4rem'}}>
          <a className="button-front-Page" href="docs/Welcome">Get Started</a>
      </div>
    );

    const CardGettingStarted = () => {
      return (
        <div style={{padding: "2ch"}}>
          <div className="card" style={{width: "100%"}}>
          <div className="card-header cardwhite">
              Getting Started        
          </div>
          <div className="card-body">
            <p className="card-text">
              Dive into user guides for Dataplatform, Slimmelden, and all other Civity products.
              <br/><br/>  
            </p>
            <a href="docs/Welcome" target="_blank" className="button">Go</a>
          </div>
        </div>
      </div>
      );
    };

    const CardReportBug = () => {
      return (
        <div style={{padding: "2ch"}}>
          <div className="card" style={{width: "100%"}}>
          <div className="card-header cardwhite">
              Report a Bug
          </div>
          <div className="card-body">
            <p className="card-text">
              Have you found a bug in one of our products? Report it here.
              <br/><br/>
            </p>
            <a href="https://civity.atlassian.net/servicedesk/customer/portals" target="_blank" className="button">👾 Report</a><i style={{paddingLeft: "10px", fontSize: ".8rem", color: "#939196"}}>Civity Servicedesk login required</i>
          </div>
        </div>
      </div>
      );
    };

    const CardStatus = () => {
      return (
        <div style={{padding: "2ch"}}>
          <div className="card" style={{width: "100%"}}>
          <div className="card-header cardwhite">
              Server Status
          </div>
          <div className="card-body">
            <p className="card-text">
              Check the server status and uptime of all Civity products.
              <br/><br/>
            </p>
            <a href="https://status.civity.nl/" target="_blank" className="button">Go</a>
          </div>
        </div>
      </div>
      );
    };

    const CardVersions = () => {
      return (
        <div style={{padding: "2ch"}}>
          <div className="card" style={{width: "100%"}}>
          <div className="card-header cardwhite">
              Release Versions
          </div>
          <div className="card-body">
            <p className="card-text">
              View our current release versions and change logs for all Civity projects.
              <br/><br/>
            </p>
            <a href="docs/current-versions" target="_blank" className="button">Go</a>
          </div>
        </div>
      </div>
      );
    };

    return (
      <div>
        <div className="indexHero">
        <HomeSplash siteConfig={siteConfig} language={language} />
        </div>
        <div className="mainContainer-dark">
          <FeatureCallout />
          <Container
                  padding={['top']}/>
        </div>
        {/* <Container
          padding={['bottom', 'top']}>
          <div className="row">
            <div className="col-sm-6">
              <CardGettingStarted/>
            </div>
          <div className="col-sm-6">
            <CardVersions/>
            </div>
          </div>
          </Container>  */}

      </div>
    );
  }
}

export default props => <Layout><Index {...props} /></Layout>;
