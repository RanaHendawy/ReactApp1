using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<RDAdminPanel.Administration.LanguageRow>;
using MyRow = RDAdminPanel.Administration.LanguageRow;


namespace RDAdminPanel.Administration;
public interface ILanguageListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class LanguageListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageListHandler
{
    public LanguageListHandler(IRequestContext context)
         : base(context)
    {
    }
}