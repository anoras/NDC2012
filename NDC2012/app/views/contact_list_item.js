ContactsApp.Views.ContactListItem = Support.CompositeView.extend({
	initialize: function() {
		_.bindAll(this,"render");
	},
	render: function() {
		console.log(JSON.stringify(this.model));
		this.$el.html(Preloader.get('contacts/contact_list_item')({ id: this.model.get('id'), firstName: this.model.get('firstName'), lastName: this.model.get('lastName') }));
	}
});
