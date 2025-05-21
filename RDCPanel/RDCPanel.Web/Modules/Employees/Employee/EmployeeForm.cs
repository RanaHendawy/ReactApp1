using Serenity.ComponentModel;

namespace RDCPanel.Employees.Forms;

[FormScript("Employees.Employee")]
[BasedOnRow(typeof(EmployeeRow), CheckNames = true)]
public class EmployeeForm
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