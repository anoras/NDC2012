window.ContactsApp = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function(data) {
		var self = this;
		console.log("Preloading templates...");
		Preloader.loadTemplates(['contacts/index', 'contacts/contact_list_item', 'contacts/form_fields', 'contacts/contact_details', 'contacts/contact_list'], function() {
			self.contacts = new ContactsApp.Collections.Contacts(JSON.parse($('#bootstrap-data').html()));	
			self.router = new ContactsApp.Routers.Contacts({
				collection: self.contacts
			});
			if (!Backbone.history.started) {
				console.log("Staring router");
				Backbone.history.start();
			};
		});
	}
};

$(function() {
	console.log("Initializing app");
	ContactsApp.initialize();
});