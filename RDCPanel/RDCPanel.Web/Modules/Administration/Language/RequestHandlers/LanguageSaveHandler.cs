using MyRequest = Serenity.Services.SaveRequest<RDCPanel.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = RDCPanel.Administration.LanguageRow;


namespace RDCPanel.Administration;
public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
{
    public LanguageSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}