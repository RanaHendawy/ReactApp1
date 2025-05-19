using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<RDAdmin.Administration.RoleRow>;
using MyRow = RDAdmin.Administration.RoleRow;


namespace RDAdmin.Administration;
public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
{
    public RoleListHandler(IRequestContext context)
         : base(context)
    {
    }
}