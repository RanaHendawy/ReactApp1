using Serenity.ComponentModel;
using System.ComponentModel;

namespace RDCPanel.Employees.Columns;

[ColumnsScript("Employees.Employee")]
[BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
public class EmployeeColumns
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