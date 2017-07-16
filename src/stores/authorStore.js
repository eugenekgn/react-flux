const _ = require('lodash');
const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes.js');

// used to broadcast our events from stores, uses node's event emitter
const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

let _authors = [];

const AuthorStore = Object.assign({}, EventEmitter.prototype, {

  addChangeListener: function (cb) {
    this.on(CHANGE_EVENT, cb);
  },

  removeChangeListener: function (cb) {
    this.removeListener(CHANGE_EVENT, cb);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },


  getAllAuthors: function () {
    return _authors;
  },

  getAuthorById(id){
    return _.find(_authors, {id: id});
  },

});

Dispatcher.register(function (action) {
  switch (action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initialData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    case ActionTypes.UPDATE_AUTHOR:
      _authors[action.author.id] = action.author;
      AuthorStore.emitChange();
      break;
    case ActionTypes.DELETE_AUTHOR:
      _.remove(_authors, function (author) {
        return action.id === author.id;
      });
      AuthorStore.emitChange();
      break;
    default:
    // no op
  }
});

module.exports = AuthorStore;