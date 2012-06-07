using System;
using System.Web;
using System.Web.UI;
using ServiceStack.Redis;
using ServiceStack.Text;
using ServiceStack.Common.Extensions;

namespace NDC2012
{
	public partial class Default : System.Web.UI.Page
	{
		protected string BootstrapData { get; private set; }
		protected override void OnLoad (EventArgs e)
		{
			new BasicRedisClientManager().ExecAs<Contact>(r=> BootstrapData = r.GetAll().ToJson());
			base.OnLoad (e);
		}
	}
}