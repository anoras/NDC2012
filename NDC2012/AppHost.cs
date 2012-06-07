using System;
using Funq;
using ServiceStack.Common;
using ServiceStack.Common.Web;
using ServiceStack.ServiceInterface;
using ServiceStack.ServiceHost;
using ServiceStack.WebHost.Endpoints;
using ServiceStack.Redis;

namespace NDC2012
{
	public class AppHost : AppHostBase
	{
		public AppHost () : base("Contact Manager", typeof(ContactService).Assembly) {}
		public override void Configure (Funq.Container container)
		{
			ServiceStack.Text.JsConfig.EmitCamelCaseNames = true;
			Routes.
				Add<Contact>("/contacts").
				Add<Contact>("/contacts/{id}");
			container.Register<IRedisClientsManager>(new BasicRedisClientManager());
		}
	}
}

