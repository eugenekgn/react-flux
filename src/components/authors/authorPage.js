const React = require('react');
const AuthorStore = require('../../stores/authorStore');
const AuthorActions = require('../../actions/authorActions');
const AuthorList = require('./authorList');

const Router = require('react-router');
const Link = require('react-router').Link;

const AuthorPage = React.createClass({

  getInitialState() {
    return {
      authors: AuthorStore.getAllAuthors(),
    };
  },

  componentDidMount() {
    if (this.isMounted()) {
      this.setState({
        authors: AuthorStore.getAllAuthors(),
      });
    }
  },

  componentWillMount: function () {
    AuthorStore.addChangeListener(this._onChange);
  },

  // Clean up when this component is unmounted
  componentWillUnmount: function () {
    AuthorStore.removeChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({
      authors: AuthorStore.getAllAuthors(),
    });
  },

  render: function () {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="addAuthor" className="btn btn-default">Add Author </Link>
        <AuthorList authors={this.state.authors}/>
      </div>);
  },
});

module.exports = AuthorPage;
