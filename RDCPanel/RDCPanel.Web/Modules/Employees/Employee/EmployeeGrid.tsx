import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { EmployeeColumns, EmployeeRow, EmployeeService } from '../../ServerTypes/Employees';
import { EmployeeDialog } from './EmployeeDialog';

@Decorators.registerClass('RDCPanel.Employees.EmployeeGrid')
export class EmployeeGrid extends EntityGrid<EmployeeRow> {
    protected getColumnsKey() { return EmployeeColumns.columnsKey; }
    protected getDialogType() { return EmployeeDialog; }
    protected getRowDefinition() { return EmployeeRow; }
    protected getService() { return EmployeeService.baseUrl; }
}