using MyRequest = RDAdmin.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<RDAdmin.Administration.UserRow>;
using MyRow = RDAdmin.Administration.UserRow;

namespace RDAdmin.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}