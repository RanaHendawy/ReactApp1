using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<RDCPanel.RDTeam.RdTeamsRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = RDCPanel.RDTeam.RdTeamsRow;

namespace RDCPanel.RDTeam;

public interface IRdTeamsSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class RdTeamsSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRdTeamsSaveHandler
{
    public RdTeamsSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}