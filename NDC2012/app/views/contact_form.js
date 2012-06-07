ContactsApp.Views.ContactForm = Support.CompositeView.extend({
	tagName: 'form',
	events: {
		'submit':						"save",
		'click #delete-contact-link':	"delete"
	},
	initialize: function() {
		_.bindAll(this,"render","saved");
		console.log("Initialize ContactForm.");
		console.log(JSON.stringify(this.model));
		this.mode = this.model.id !== 0 ? 'edit' : 'new';
	},
	render: function() {
		this.$el.addClass('form-horizontal');
		this.$el.html(Preloader.get('contacts/form_fields')(this.model.attributes));
		return this;
	},
	save: function(e) {
		e.preventDefault();
		this.model.set('firstName', this.$('input[name=firstName]').val()); 
		this.model.set('lastName', this.$('input[name=lastName]').val()); 
		this.model.save({}, { success: this.saved });
		return false;
	},
	saved: function() {
		console.log("Saved!");
		console.log(JSON.stringify(arguments));
		this.collection.add(this.model);
		ContactsApp.router.navigate("contacts/"+this.model.get('id'), {trigger: true});
	},
	delete: function() {
		console.log("Scratch that");
		this.model.destroy();
		ContactsApp.router.navigate("#", {trigger: true});
	}
});