ContactsApp.Views.ContactsIndex = Support.CompositeView.extend({
	initialize: function() {
		console.log("Initializing ContactsIndex view");
		_.bindAll(this, 'render');
	},
	render: function() {
		console.log("Rendering ContactsIndex view");
		this.renderTemplate();
		this.renderContactList();
		this.renderDetailPane();
		return this;
	},
	renderTemplate: function() {
		this.$el.html(Preloader.templates['contacts/index']);
	},
	renderContactList: function() {
		var contactListView = new ContactsApp.Views.ContactList({ collection: this.collection });
		this.renderChild(contactListView);
		this.$('#contact-list').html(contactListView.el);
	},
	renderDetailPane: function() {
		this.$('#contact-details').html("Please select a contact from the list to the left, or create a new one");
	}
});
