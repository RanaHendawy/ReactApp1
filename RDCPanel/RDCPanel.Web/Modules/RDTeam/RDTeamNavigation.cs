using Serenity.Navigation;
using MyPages = RDCPanel.RDTeam.Pages;

[assembly: NavigationMenu(int.MaxValue, "RDTeam", icon: "fa-users")]
[assembly: NavigationLink(int.MaxValue, "RDTeam/Team", typeof(MyPages.RdTeamsPage), icon: null)]