import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { RdTeamsColumns, RdTeamsRow, RdTeamsService } from '../../ServerTypes/RDTeam';
import { RdTeamsDialog } from './RdTeamsDialog';

@Decorators.registerClass('RDCPanel.RDTeam.RdTeamsGrid')
export class RdTeamsGrid extends EntityGrid<RdTeamsRow> {
    protected getColumnsKey() { return RdTeamsColumns.columnsKey; }
    protected getDialogType() { return RdTeamsDialog; }
    protected getRowDefinition() { return RdTeamsRow; }
    protected getService() { return RdTeamsService.baseUrl; }
}