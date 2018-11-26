import { HashRouter as Router, NavLink } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import { Helmet } from 'react-helmet';

function Shell({ children }) {
  return (
    <Router>
      <>
        <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>Charm</title>
        </Helmet>

        <div className="layout">
          {children}

          <div className="content">
            <hr />

            <div className="display--flex justify-content--between">
              <button type="button">
                Previous
                <br />
                <span className="text--blue">— Contents</span>
              </button>

              <button type="button" className="text--right">
                <span className="text--secondary">Next</span>
                <br />
                <span className="text--blue">Contributions —</span>
              </button>
            </div>
          </div>
        </div>

        <nav className="nav">
          <ul className="list--inline list--style-none">
            <li className="text--secondary"><small className="small">v16.7.0</small></li>
            <li className="text--secondary"><small className="small">Getting Started</small></li>
            <li className="text--light"><small className="small">20th November</small></li>
          </ul>
        </nav>

        <div className="aside">
          <div className="aside__logo">
            <small className="small text--bold">React Library</small>
          </div>

          <ul className="list--aside">
            <li className="list-item--style-none">
              <NavLink to="/" exact className="link link_main" activeClassName="is-active">Getting started</NavLink>
            </li>
            <li className="list-item--style-none">
              <ul className="list--aside margin-bottom--1">
                <li><NavHashLink to="/#try-react" className="link link_main link_small">Try React</NavHashLink></li>
                <li className="list-item--style-none">
                  <ul className="list--aside">
                    <li><NavHashLink to="/#more-on-react" className="link link_main link_small">More on react</NavHashLink></li>
                    <li><NavHashLink to="/#learn-react" className="link link_main link_small">Learn react</NavHashLink></li>
                  </ul>
                </li>
              </ul>
            </li>
            <NavLink to="/about" className="link link_main" activeClassName="is-active">About</NavLink>
          </ul>
        </div>
      </>
    </Router>
  );
}

Shell.defaultProps = {
  children: null,
};

Shell.propTypes = {
  children: PropTypes.node,
};

export default Shell;
