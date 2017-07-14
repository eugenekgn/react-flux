const Dispatcher = require('../dispatcher/appDispatcher');
const ActionTypes = require('../constants/actionTypes.js');
// used to broadcast our events from stores, uses node's event emitter
const EventEmitter = require('events').EventEmitter;
const CHANGE_EVENT = 'change';

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

});

Dispatcher.register(function (actions) {
  switch (actions.actionType) {

  }
});

module.exports = AuthorStore;