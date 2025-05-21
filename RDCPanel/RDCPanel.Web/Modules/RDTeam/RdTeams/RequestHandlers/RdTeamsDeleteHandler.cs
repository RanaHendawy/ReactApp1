using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = RDCPanel.RDTeam.RdTeamsRow;

namespace RDCPanel.RDTeam;

public interface IRdTeamsDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class RdTeamsDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRdTeamsDeleteHandler
{
    public RdTeamsDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}