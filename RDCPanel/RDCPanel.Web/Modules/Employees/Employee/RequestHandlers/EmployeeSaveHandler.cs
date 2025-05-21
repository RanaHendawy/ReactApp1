using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<RDCPanel.Employees.EmployeeRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = RDCPanel.Employees.EmployeeRow;

namespace RDCPanel.Employees;

public interface IEmployeeSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeSaveHandler
{
    public EmployeeSaveHandler(IRequestContext context)
            : base(context)
    {
    }
}