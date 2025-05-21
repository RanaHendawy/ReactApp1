import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface RdTeamsForm {
    Name: StringEditor;
    JobTitle: StringEditor;
    Department: StringEditor;
    Extension: StringEditor;
    Email: StringEditor;
    Image: ImageUploadEditor;
    Branch: StringEditor;
    Initial: StringEditor;
}

export class RdTeamsForm extends PrefixedContext {
    static readonly formKey = 'RDTeam.RdTeams';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!RdTeamsForm.init)  {
            RdTeamsForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(RdTeamsForm, [
                'Name', w0,
                'JobTitle', w0,
                'Department', w0,
                'Extension', w0,
                'Email', w0,
                'Image', w1,
                'Branch', w0,
                'Initial', w0
            ]);
        }
    }
}