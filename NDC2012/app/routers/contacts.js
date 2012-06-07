ContactsApp.Routers.Contacts = Support.SwappingRouter.extend({
	routes: {
		'':						"index",
		'contacts/new':			"new",
		'contacts/:id':			"show",
		'contacts/:id/edit':	"edit"
	},
	initialize: function(options) {
		this.el = $('div#app-content');
		this.collection = options.collection;
	},
	index: function() {
		console.log("Invoking index route");
		var view = new ContactsApp.Views.ContactsIndex({ collection: this.collection });
		this.swap(view);
	},
	show: function(id) {
		console.log("Invoking show route");
		var contact = this.collection.get(id);
		var self = this;
		contact.fetch({
			success: function() {
				var view = new ContactsApp.Views.ShowContact({ model: contact, collection: self.collection });
				self.swap(view);
			},
			error: function(e) {
				console.error(e);
			}
		});
	},
	new: function() {
		console.log("Invoking new route");
		var view = new ContactsApp.Views.NewContact({ collection: this.collection });
		this.swap(view);
	},
	edit:function(id) {
		console.log("Invoking edit route");
		var contact = this.collection.get(id);
		var self = this;
		contact.fetch({
			success: function() {
				var view = new ContactsApp.Views.NewContact({ collection: self.collection, model: contact });
				self.swap(view);
			},
			error: function(e) {
				console.error(e);
			}
		});
	}
});