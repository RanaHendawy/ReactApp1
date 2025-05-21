using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<RDCPanel.RDTeam.RdTeamsRow>;
using MyRow = RDCPanel.RDTeam.RdTeamsRow;

namespace RDCPanel.RDTeam;

public interface IRdTeamsListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class RdTeamsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRdTeamsListHandler
{
    public RdTeamsListHandler(IRequestContext context)
            : base(context)
    {
    }
}