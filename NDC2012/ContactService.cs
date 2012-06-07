using System;
using ServiceStack.ServiceInterface;
using ServiceStack.WebHost.Endpoints;
using ServiceStack.Redis;

namespace NDC2012
{
	public class ContactService : RestServiceBase<Contact>
	{
		public IRedisClientsManager RedisManager { get; set; }
		public override object OnGet (Contact request)
		{
			if (request.Id == default(long)) {
				return RedisManager.ExecAs<Contact>(r => r.GetAll());
			} else {
				return RedisManager.ExecAs<Contact>(r => r.GetById(request.Id));
			}
		}
		public override object OnPost (Contact request)
		{

			RedisManager.ExecAs<Contact>(r=> {
				if(request.Id == default(long)) request.Id = r.GetNextSequence();
				r.Store(request);
			});
			return request;
		}
		public override object OnPut (Contact request)
		{
			return OnPost(request);
		}
		public override object OnDelete (Contact request)
		{
			RedisManager.ExecAs<Contact>(r=> r.DeleteById(request.Id));
			return null;
		}
		
	}
}

