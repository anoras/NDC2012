ContactsApp.Views.ContactList = Support.CompositeView.extend({
	events: {
		'keyup #contact-query':		"filter"	
	},
	initialize: function() {
		_.bindAll(this,"render");
		this.collection.on('add destroy', this.render);
	},
	render: function() {
		//this.$('#contact-list').empty();
		this.$el.html(Preloader.get('contacts/contact_list')());
		var self = this;
		this.collection.each(function(contact) {
			var contact = new ContactsApp.Views.ContactListItem({model: contact});
			self.renderChild(contact);
			self.$('#contact-list').append(contact.el);
		});
		return this;
	},
	filter: function(e) {
		var query = $('#contact-query').val().toLowerCase();
		this.$('#contact-list a').each(function(i) {
			if (this.innerText.toLowerCase().indexOf(query) === -1) {
				$(this).closest('li').hide();
			} else {
				$(this).closest('li').show();
			}
		});
	}
});
