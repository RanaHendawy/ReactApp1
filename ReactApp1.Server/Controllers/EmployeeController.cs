using Microsoft.AspNetCore.Mvc;

namespace ReactApp1.Server.Controllers
{
    public class EmployeeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
