ContactsApp.Collections.Contacts = Backbone.Collection.extend({
	model: ContactsApp.Models.Contact,
	url: '/api/contacts',
	comparator: function(contact) {
		return contact.get('lastName');
	}
});
