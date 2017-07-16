const React = require('react');
const Router = require('react-router');
const Link = Router.Link;
const AuthorActions = require('../../actions/authorActions');
const toastr = require('toastr');

const AuthorList = React.createClass({

  deleteAuthor: function (id, event) {
    event.preventDefault();
    AuthorActions.deleteAuthor(id);
    toastr.success('Author Deleted');
  },

  render: function () {

    const createAuthorRow = function (author) {
      // key property insures that children components properly reorders or destroyed
      return (
        <tr key={author.id}>
          <td>
            <Link to="manageAuthor" params={{id: author.id}}>
              {author.id}
            </Link>
          </td>
          <td>{author.firstName} {author.lastName}</td>
          <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
        </tr>
      );
    };

    return (<div>
      <h1>Authors</h1>

      <table className="table">
        <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Actions</th>
        </thead>
        <tbody>
        {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    </div>);
  },
});

module.exports = AuthorList;
