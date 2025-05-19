using MyRequest = Serenity.Services.SaveRequest<RDAdmin.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = RDAdmin.Administration.LanguageRow;


namespace RDAdmin.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}