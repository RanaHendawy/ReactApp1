using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<RDAdminPanel.Administration.RoleRow>;
using MyRow = RDAdminPanel.Administration.RoleRow;


namespace RDAdminPanel.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}