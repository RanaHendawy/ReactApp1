using Serenity.Navigation;
using MyPages = RDCPanel.Employees.Pages;

[assembly: NavigationMenu(9000, "Employees", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "Employees/Employee", typeof(MyPages.EmployeePage), icon: null)]