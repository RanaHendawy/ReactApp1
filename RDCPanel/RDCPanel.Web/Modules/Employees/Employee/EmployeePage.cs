using Microsoft.AspNetCore.Mvc;
using Serenity.Web;

namespace RDCPanel.Employees.Pages;

[PageAuthorize(typeof(EmployeeRow))]
public class EmployeePage : Controller
{
    [Route("Employees/Employee")]
    public ActionResult Index()
    {
        return this.GridPage<EmployeeRow>("@/Employees/Employee/EmployeePage");
    }
}