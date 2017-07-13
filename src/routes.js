/* eslint-disable */


const React = require('react');
const Router = require('react-router');
const DefaultRoute = Router.DefaultRoute;
const Route = Router.Route;
const Redirect = Router.Redirect;
const NotFoundRoute = Router.NotFoundRoute;

const App = require('./components/app');
const About = require('./components/about/aboutPage');
const HomePage = require('./components/homePage');
const AuthorPage = require('./components/authors/authorPage');
const NotFoundPage = require('./components/notFoundPage');
const ManageAuthorPage = require('./components/authors/ManageAuthorPage');

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={HomePage}/>
    <Route name="authors" handler={AuthorPage}/>
    <Route name="about" handler={About}/>
    <Route name="addAuthor" path="author" handler={ManageAuthorPage}/>
    <NotFoundRoute handler={NotFoundPage}/>
    <Redirect from="about-us" to="about"/>
    <Redirect from="awthors" to="authors"/>
    <Redirect from="about/*" to="about"/>
  </Route>
);

module.exports = routes;