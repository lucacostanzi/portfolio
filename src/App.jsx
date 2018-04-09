import React from 'react';
import { Icon, Tag, Button } from 'reactbulma';
import './App.css';
import Header from './components/Header';
import Bio from './components/Bio';
import { Project } from './components/Project';
import SkillsListContainer from './containers/SkillsListContainer';

const App = function () {
  return (
    <div>
      <nav className="navbar is-fixed-top is-dark is-bold" style={{ marginBottom: 52 }} >
        <div className="navbar-brand" >
          <a className="navbar-item" href="#top" >
            <span className="color-deepsky is-bold" style={{ marginLeft: 10, fontWeight: 700, fontSize: 20 }} >
              <b>{'<LucaCostanzi />'}</b>
            </span>
          </a>
        </div>
        <div className="navbar-menu" >
          <div className="navbar-start" >
            <a className="navbar-item" href="#toolbag" >
              My tool bag
            </a>
            <a className="navbar-item" href="#projects" >
              My projects
            </a>
          </div>
          <div className="navbar-end" >
            <a
              className="navbar-item"
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/lucacostanzi/" >
              <Icon small >
                <i className="fab fa-github" />
              </Icon>
            </a>
            <a
              className="navbar-item"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/luca-costanzi-40915014b/" >
              <Icon>
                <i className="fab fa-linkedin" />
              </Icon>
            </a>
          </div>
        </div>
      </nav>
      <a name="top" style={{ marginTop: -50, paddingTop: 50, display: 'block' }} ></a>
      <div style={{ marginTop: 52 }} >
        <Header medium title={'<LucaCostanzi />'} subtitle="FullstackWebDev" color="is-dark" >
          <div className="buttons is-centered" >
            <a className="button is-big is-link bgcolor-deepsky" href="mailto:luca.costanzi@gmail.com" >
              <Icon>
                <i className="far fa-envelope" />
              </Icon>
              <span>Contact me</span>
            </a>
            <Button inverted outlined link >
              <a
                className=""
                href="https://www.linkedin.com/in/luca-costanzi-40915014b/"
                rel="noopener noreferrer"
                target="_blank" >
                <Icon>
                  <i className="fab fa-linkedin" />
                </Icon>
                <span style={{ valign: -5 }} >Linkedin</span>
              </a>
            </Button>
            <Button inverted outlined link >
              <a
                className=""
                href="https://github.com/lucacostanzi/"
                rel="noopener noreferrer"
                target="_blank" >
                <Icon>
                  <i className="fab fa-github" />
                </Icon>
                <span>Github</span>
              </a>
            </Button>
          </div>
        </Header>
        <div className="section" >
          <div className="container" >
            <Bio />
          </div>
        </div>
        <a style={{ marginTop: -50, paddingTop: 50, display: 'block' }} name="toolbag" ></a>
        <Header title="My tool bag" subtitle="What I use to get the work done." color="is-info " />
        <div className="section" >
          <div className="container " >
            <div className="columns " >
              <div className="column is-12" >
                <SkillsListContainer cardsPerLine={3} />
              </div>
            </div>
          </div>
        </div>
        <a name="projects" style={{ marginTop: -50, paddingTop: 50, display: 'block' }} ></a>
        <Header title="My projects" subtitle="What I do in my free time." color="is-warning " />
        <div className="section" >
          <div className="container is-primary" >
            <Project image="/images/dynabox.png" left={false} >
              <h1 className="title  is-2 " style={{ marginBottom: 10 }} >Dynabox</h1>
              <p className="tags " style={{ padding: 0, margin: 0 }} >
                <Tag dark >Jquery</Tag>
                <Tag info >Javascript</Tag>
                <Tag primary >Html</Tag>
                <Tag warning >Css</Tag>
              </p>
              <p className="content subtitle" >A Dynamically rendered dropdown. Keeps an object of properties for each
                option which
                enables
                easy updates to the component.
              </p>
              <p className="buttons " >
                <a className="button is-small"
                   href="https://github.com/lucacostanzi/dynabox"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fab fa-github" />
                  </Icon>
                  <span>Github</span>
                </a>
                <a className="button is-small"
                   href="https://lucacostanzi.github.io/dynabox/"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fas fa-book" />
                  </Icon>
                  <span>Docs</span>
                </a>
              </p>
            </Project>
            <Project image="/images/commandline.png" left >
              <h1 className="title  is-2 " style={{ marginBottom: 10 }} >WebTerminal</h1>
              <p className="tags " style={{ padding: 0, margin: 0 }} >
                <Tag dark >Jquery</Tag>
                <Tag info >Javascript</Tag>
                <Tag primary >Html</Tag>
                <Tag warning >Css</Tag>
              </p>
              <p className="content subtitle" >A javascript based gimmicky command line tool.
                Interact with your keyboard as if using a real command line!</p>
              <p className="buttons " >
                <a className="button is-small"
                   href="https://github.com/lucacostanzi/webterminal"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fab fa-github" />
                  </Icon>
                  <span>Github</span>
                </a>
                <a className="button is-small"
                   href="https://lucacostanzi.github.io/webterminal/"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fas fa-terminal" />
                  </Icon>
                  <span>Terminal</span>
                </a>
              </p>
            </Project>
            <Project image="/images/website.png" left={false} >
              <h1 className="title  is-2 " style={{ marginBottom: 10 }} >This website!</h1>
              <p className="tags " style={{ padding: 0, margin: 0 }} >
                <Tag dark >React</Tag>
                <Tag warning >Bulma</Tag>
              </p>
              <p className="content subtitle" >The single page application you are looking at! The dynamic list of
                skills
                is loaded
                from a remote
                json file.</p>
            </Project>
            <Project image="/images/reactreduxorders.png" left >
              <h1 className="title  is-2 " style={{ marginBottom: 10 }} >React-redux Orders</h1>
              <p className="tags " style={{ padding: 0, margin: 0 }} >
                <Tag dark >React</Tag>
                <Tag info >Redux</Tag>
                <Tag primary >Material-ui</Tag>
                <Tag warning >Lodash</Tag>
              </p>
              <p className="content subtitle" >
                Single-page application to manage orders.
                The state of the application is kept on a redux store. The data for the orders, products, categories
                and customers is retrieved from a remote API.
                Local storage is used to mantain the state (try to edit and refresh the page). Eslint configuration:
                Airbnb. Designed with Material-ui
              </p>
              <p className="buttons " >
                <a className="button is-small" href="https://github.com/lucacostanzi/redux-orders"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fab fa-github" />
                  </Icon>
                  <span>Github</span>
                </a>
                <a className="button is-small"
                   href="https://lucacostanzi.github.io/redux-orders/"
                   rel="noopener noreferrer"
                   target="_blank" >
                  <Icon small >
                    <i className="fas fa-shopping-cart" />
                  </Icon>
                  <span>Preview</span>
                </a>
              </p>
            </Project>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
