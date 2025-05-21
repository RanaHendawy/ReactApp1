using Serenity.Services;
using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<RDCPanel.Employees.EmployeeRow>;
using MyRow = RDCPanel.Employees.EmployeeRow;

namespace RDCPanel.Employees;

public interface IEmployeeListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeListHandler
{
    public EmployeeListHandler(IRequestContext context)
            : base(context)
    {
    }
}