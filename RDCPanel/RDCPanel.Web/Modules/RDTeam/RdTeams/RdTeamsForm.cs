using Serenity.ComponentModel;

namespace RDCPanel.RDTeam.Forms;

[FormScript("RDTeam.RdTeams")]
[BasedOnRow(typeof(RdTeamsRow), CheckNames = true)]
public class RdTeamsForm
{
    public string Name { get; set; }
    public string JobTitle { get; set; }
    public string Department { get; set; }
    public string Extension { get; set; }
    public string Email { get; set; }
    public string Image { get; set; }
    public string Branch { get; set; }
    public string Initial { get; set; }
}