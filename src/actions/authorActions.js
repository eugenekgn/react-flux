const Dispatcher = require('../dispatcher/appDispatcher');
const AuthorApi = require('../api/authorApi.js');
const ActionsTypes = require('../constants/actionTypes.js');

const AuthorActions = {
  createAuthor: function (author) {
    const newAuthor = AuthorApi.saveAuthor(author);

    // Hey dispatcher, go tell all the stores that an author has just been created
    Dispatcher.dispatch({
      actionType: ActionsTypes.CREATE_AUTHOR,
      author: newAuthor,
    });
  },

  updateAuthor: function (author) {
    const updatedAuthor = AuthorApi.saveAuthor(author);

    Dispatcher.dispatch({
      actionType: ActionsTypes.UPDATE_AUTHOR,
      author: updatedAuthor,
    });
  },

  deleteAuthor: function (id) {
    Dispatcher.dispatch({
      actionType: ActionsTypes.DELETE_AUTHOR,
      id: id,
    });
  },
};

module.exports = AuthorActions;
