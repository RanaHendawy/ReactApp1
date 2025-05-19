using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Model;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WeatherForecastController : ControllerBase

    {
        private readonly Reactwebsite db;

        public WeatherForecastController(Reactwebsite context)
        {
            db = context;
        }

        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        //private readonly ILogger<WeatherForecastController> _logger;
        
        //public WeatherForecastController(ILogger<WeatherForecastController> logger)
        //{
        //    _logger = logger;
        //}

        [HttpGet(Name = "GetWeatherForecast")]
        public IEnumerable<WeatherForecast> Get()
        {
            return Enumerable.Range(1, 5).Select(index => new WeatherForecast
            {
                Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
                TemperatureC = Random.Shared.Next(-20, 55),
                Summary = Summaries[Random.Shared.Next(Summaries.Length)]
            })
            .ToArray();
        }


        [HttpGet("employees")]
        public List<Employeelist> GetEmployees()
        {
          var empList =  db.Employee.ToList();
           var AllempList = new List<Employeelist>();
            foreach (var item in empList)
            {
                 var emp = new Employeelist();
                emp.Id = item.Id;
                emp.Name = item.Name;
                emp.JobTitle = item.JobTitle;
                emp.Department = item.Department;
                emp.Extension = item.Extension;
                emp.Email = item.Email;
                emp.Image = item.Image;
                //empList.Add(item.Name);
                AllempList.Add(emp);
            }

            return AllempList;
        }
    }
}
