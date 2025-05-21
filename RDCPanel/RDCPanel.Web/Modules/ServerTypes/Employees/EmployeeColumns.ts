import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { EmployeeRow } from "./EmployeeRow";

export interface EmployeeColumns {
    Id: Column<EmployeeRow>;
    Name: Column<EmployeeRow>;
    JobTitle: Column<EmployeeRow>;
    Department: Column<EmployeeRow>;
    Extension: Column<EmployeeRow>;
    Email: Column<EmployeeRow>;
    Image: Column<EmployeeRow>;
    Branch: Column<EmployeeRow>;
    Initial: Column<EmployeeRow>;
}

export class EmployeeColumns extends ColumnsBase<EmployeeRow> {
    static readonly columnsKey = 'Employees.Employee';
    static readonly Fields = fieldsProxy<EmployeeColumns>();
}