using static System.Net.Mime.MediaTypeNames;

namespace ReactApp1.Server.Model
{
    public class Employeelist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string JobTitle { get; set; }
        public string Department { get; set; }
        public string Extension { get; set; }

        public string Email { get; set; }

        public string Image { get; set; }
        public string Branch { get; set; }

        public string Initial { get; set; }
        public Employeelist()
        {

        }

        //public Employeelist(int id, string name, string jobTitle, string department, string extension, string email, string image)
        //{
        //   // var emp = new Employeelist();
        //    var empList = new List<Employeelist>();
        //    Id = id;
        //    Name = name;
        //    JobTitle = jobTitle;
        //    Department = department;
        //    Extension = extension;
        //    Email = email;
        //    Image = image;
        //}
    }
}
