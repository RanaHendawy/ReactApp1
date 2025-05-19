using Microsoft.EntityFrameworkCore;

namespace ReactApp1.Server.Model

{
    public class Reactwebsite : DbContext
    {
        public Reactwebsite(DbContextOptions<Reactwebsite> options) : base(options) { }

        public DbSet<Employeelist> Employee { get; set; }

    }
}
