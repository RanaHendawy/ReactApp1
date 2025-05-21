import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { RdTeamsForm, RdTeamsRow, RdTeamsService } from '../../ServerTypes/RDTeam';

@Decorators.registerClass('RDCPanel.RDTeam.RdTeamsDialog')
export class RdTeamsDialog extends EntityDialog<RdTeamsRow, any> {
    protected getFormKey() { return RdTeamsForm.formKey; }
    protected getRowDefinition() { return RdTeamsRow; }
    protected getService() { return RdTeamsService.baseUrl; }

    protected form = new RdTeamsForm(this.idPrefix);
}