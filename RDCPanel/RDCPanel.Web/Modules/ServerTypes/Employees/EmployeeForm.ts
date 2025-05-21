import { StringEditor, ImageUploadEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";

export interface EmployeeForm {
    Name: StringEditor;
    JobTitle: StringEditor;
    Department: StringEditor;
    Extension: StringEditor;
    Email: StringEditor;
    Image: ImageUploadEditor;
    Branch: StringEditor;
    Initial: StringEditor;
}

export class EmployeeForm extends PrefixedContext {
    static readonly formKey = 'Employees.Employee';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!EmployeeForm.init)  {
            EmployeeForm.init = true;

            var w0 = StringEditor;
            var w1 = ImageUploadEditor;

            initFormType(EmployeeForm, [
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