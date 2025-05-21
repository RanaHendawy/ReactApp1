using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace RDCPanel.RDTeam.Pages;

[PageAuthorize(typeof(RdTeamsRow))]
public class RdTeamsPage : Controller
{
    [Route("RDTeam/RdTeams")]
    public ActionResult Index()
    {
        return this.GridPage<RdTeamsRow>("@/RDTeam/RdTeams/RdTeamsPage");
    }
}