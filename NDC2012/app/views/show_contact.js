ContactsApp.Views.ShowContact = ContactsApp.Views.ContactsIndex.extend({
	renderDetailPane: function() {
		this.$('#contact-details').html(Preloader.get('contacts/contact_details')(this.model.attributes));
	}
});