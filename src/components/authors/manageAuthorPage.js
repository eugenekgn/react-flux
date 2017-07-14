const React = require('react');
const AuthorForm = require('./authorFromPage');
const AuthorApi = require('../../api/authorApi');
const Router = require('react-router');
const toastr = require('toastr');

const ManageAuthorPage = React.createClass({
  mixins: [
    Router.Navigation
  ],

  statics: {
    willTransitionFrom: function (transition, component) {
      if (component.state.dirty && !confirm('Leave without saving?')) {
        transition.abort();
      }
    },
  },

  getInitialState: function () {
    return {
      author: {
        id: '',
        firstName: '',
        lastName: '',
      },
      errors: {},
      dirty: false,
    };
  },

  setAuthorState: function (event) {
    this.setState({dirty: true});
    const field = event.target.name;
    this.state.author[field] = event.target.value;
    return this.setState({author: this.state.author});
  },

  isAuthorFormValid: function () {
    let formIsValid = true;
    this.state.errors = {};

    if (this.state.author.firstName.length < 3) {
      this.state.errors.firstName = 'First Name might be at least 3 characters';
      formIsValid = false;
    }

    if (this.state.author.lastName.length < 3) {
      this.state.errors.lastName = 'Last Name might be at least 3 characters';
      formIsValid = false;
    }

    this.setState({
      errors: this.state.errors,
    });

    return formIsValid;
  },

  saveAuthor: function (event) {
    // prevent default browser event
    event.preventDefault();

    if (!this.isAuthorFormValid()) {
      return;
    }

    AuthorApi.saveAuthor(this.state.author);
    this.setState({dirty: false});
    // Redirect after clicking save
    toastr.success('Author Saved!');
    this.transitionTo('authors');
  },

  componentWillMount: function () {
    // from path /author:id
    const authorId = this.props.params.id;

    if (authorId) {
      this.setState({
        author: AuthorApi.getAuthorById(authorId),
      });
    }
  },

  render: function () {
    return ( <
        AuthorForm author={ this.state.author }
                   onChange={ this.setAuthorState }
                   onSave={ this.saveAuthor }
                   errors={ this.state.errors }
      />
    );
  },
});

module.exports = ManageAuthorPage;