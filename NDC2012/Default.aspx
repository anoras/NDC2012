<%@ Page Language="C#" Inherits="NDC2012.Default" %>
<!DOCTYPE html >
<html>
	<head>
		<title>Awesome contact manager</title>
		<link href="css/bootstrap.css" rel="stylesheet"/>
	    <script>window.JSON || document.write('<script src="/vendor/json2.js">\x3C/script>');</script>
		<script src="vendor/jquery-1.7.2.js"></script>
		<script src="vendor/underscore.js"></script>
		<script src="vendor/backbone.js"></script>
		<script src="vendor/backbone.support.js"></script>
		<script src="vendor/handlebars-1.0.0.beta6.js"></script>
		<script src="vendor/preloader.js"></script>
		<script src="app/app.js"></script>
		<script src="app/models/contact.js"></script>
		<script src="app/collections/contacts.js"></script>
		<script src="app/routers/contacts.js"></script>
		<script src="app/views/contacts_index.js"></script>
		<script src="app/views/contact_list.js"></script>
		<script src="app/views/contact_list_item.js"></script>
		<script src="app/views/new_contact.js"></script>
		<script src="app/views/show_contact.js"></script>
		<script src="app/views/contact_form.js"></script>
	</head>
	<body>
		<div id="app" class="container">
			<header>
				<h1>Awesome contact manager</h1>
			</header>
			<div id="app-content" class="row">
			</div>
		</div>
		<script type="application/json" id="bootstrap-data">
			<%= BootstrapData %>
		</script>
	</body>
</html>
