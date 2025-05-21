using Serenity.ComponentModel;
using System.ComponentModel;

namespace RDCPanel.RDTeam.Columns;

[ColumnsScript("RDTeam.RdTeams")]
[BasedOnRow(typeof(RdTeamsRow), CheckNames = true)]
public class RdTeamsColumns
{
    [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
    public int Id { get; set; }
    [EditLink]
    public string Name { get; set; }
    public string JobTitle { get; set; }
    public string Department { get; set; }
    public string Extension { get; set; }
    public string Email { get; set; }
    public string Image { get; set; }
    public string Branch { get; set; }
    public string Initial { get; set; }
}