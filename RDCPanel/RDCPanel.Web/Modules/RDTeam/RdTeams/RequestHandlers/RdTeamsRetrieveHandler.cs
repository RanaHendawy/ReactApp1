using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<RDCPanel.RDTeam.RdTeamsRow>;
using MyRow = RDCPanel.RDTeam.RdTeamsRow;

namespace RDCPanel.RDTeam;

public interface IRdTeamsRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class RdTeamsRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRdTeamsRetrieveHandler
{
    public RdTeamsRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}