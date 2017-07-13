const React = require('react');
const AuthorForm = require('./authorFromPage');
const ManageAuthorPage = React.createClass({

  getInitialState: function () {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: '',
      },
    };
  },

  setAuthorState: function () {
    const field = event.target.name;
    const value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  render: function () {
    return (
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
      />
    );
  },
});

module.exports = ManageAuthorPage;

