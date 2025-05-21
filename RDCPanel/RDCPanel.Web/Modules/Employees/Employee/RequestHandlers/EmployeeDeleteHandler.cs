using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = RDCPanel.Employees.EmployeeRow;

namespace RDCPanel.Employees;

public interface IEmployeeDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }

public class EmployeeDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IEmployeeDeleteHandler
{
    public EmployeeDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}