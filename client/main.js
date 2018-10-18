import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

import App from '../imports/ui/App.js';

import './main.html'

Meteor.startup(() => {
    ReactDOM.render(<App />, document.getElementById('app'));
})