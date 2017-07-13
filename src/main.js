const React = require('react');
const Router = require('react-router');
const routes = require('./routes');

//Router.HistoryLocation
Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('app'));
});
