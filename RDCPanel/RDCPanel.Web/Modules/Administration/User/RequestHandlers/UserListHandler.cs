using MyRequest = RDCPanel.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<RDCPanel.Administration.UserRow>;
using MyRow = RDCPanel.Administration.UserRow;

namespace RDCPanel.Administration;
public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
{
    public UserListHandler(IRequestContext context)
         : base(context)
    {
    }
}