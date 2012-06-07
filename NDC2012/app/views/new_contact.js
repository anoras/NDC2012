ContactsApp.Views.NewContact = ContactsApp.Views.ContactsIndex.extend({
	renderDetailPane: function() {
		var newContactForm = new ContactsApp.Views.ContactForm ({collection: this.collection, model: this.model || new ContactsApp.Models.Contact() });
		this.renderChild(newContactForm);
		this.$('#contact-details').html(newContactForm.el);
	}
});