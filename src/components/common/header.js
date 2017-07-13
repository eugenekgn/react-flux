const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const Header = React.createClass({
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <Link to="app" className="navbar-brand">
              <img src="images/e.jpg" width="30" alt=""/>
            </Link>

            <ul className="nav navbar-nav">
              <li><Link to="app">Home</Link></li>
              <li><Link to="authors">Authors</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </a>
        </div>
      </nav>
    );
  },
});

module.exports = Header;
