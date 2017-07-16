const React = require('react');
const Router = require('react-router');
const routes = require('./routes');
const InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

// Router.HistoryLocation
Router.run(routes, (Handler) => {
  React.render(<Handler />, document.getElementById('app'));
});
