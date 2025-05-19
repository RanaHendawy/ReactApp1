using MyRequest = RDAdminPanel.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<RDAdminPanel.Administration.UserRow>;
using MyRow = RDAdminPanel.Administration.UserRow;

namespace RDAdminPanel.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}