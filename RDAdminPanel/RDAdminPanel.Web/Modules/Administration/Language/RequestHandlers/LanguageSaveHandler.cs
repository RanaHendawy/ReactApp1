using MyRequest = Serenity.Services.SaveRequest<RDAdminPanel.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = RDAdminPanel.Administration.LanguageRow;


namespace RDAdminPanel.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}