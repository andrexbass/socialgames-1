import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

const Friends = new Mongo.Collection('friends');

Meteor.methods({
	'friend.add'(friend) {
		
	}
});

Meteor.publish('friends.listEmails',function(){
  // you should restrict this publication to only be available to admin users
  return Meteor.users.find({},{fields: { emails: 1 , services: 1}});
});