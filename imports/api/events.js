import {Mongo} from 'meteor/mongo';

// Creates a new Mongo collection and export it
export const Events = new Mongo.Collection('events');