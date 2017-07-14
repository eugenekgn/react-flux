const React = require('react');
const Router = require('react-router');
const Link = Router.Link;

const AuthorList = React.createClass({

  render: function () {

    const createAuthorRow = (author) => {
      // key property insures that children components properly reorders or destroyed
      return (
        <tr key={author.id}>
          <td>
            <Link to="manageAuthor" params={{id: author.id}}>
              {author.id}
            </Link>
          </td>
          <td>{author.firstName} {author.lastName}</td>
        </tr>
      );
    };

    return (<div>
      <h1>Authors</h1>

      <table className="table">
        <thead>
        <th>ID</th>
        <th>Name</th>
        </thead>
        <tbody>
        {this.props.authors.map(createAuthorRow, this)}
        </tbody>
      </table>
    </div>);
  },
});

module.exports = AuthorList;
