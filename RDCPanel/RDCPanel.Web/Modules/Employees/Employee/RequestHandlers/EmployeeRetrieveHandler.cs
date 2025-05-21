using Serenity.Services;
using MyRequest = Serenity.Services.RetrieveRequest;
using MyResponse = Serenity.Services.RetrieveResponse<RDCPanel.Employees.EmployeeRow>;
using MyRow = RDCPanel.Employees.EmployeeRow;

namespace RDCPanel.Employees;

public interface IEmployeeRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeRetrieveHandler
{
    public EmployeeRetrieveHandler(IRequestContext context)
            : base(context)
    {
    }
}