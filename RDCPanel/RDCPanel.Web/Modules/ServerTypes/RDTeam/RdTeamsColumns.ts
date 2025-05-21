import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { RdTeamsRow } from "./RdTeamsRow";

export interface RdTeamsColumns {
    Id: Column<RdTeamsRow>;
    Name: Column<RdTeamsRow>;
    JobTitle: Column<RdTeamsRow>;
    Department: Column<RdTeamsRow>;
    Extension: Column<RdTeamsRow>;
    Email: Column<RdTeamsRow>;
    Image: Column<RdTeamsRow>;
    Branch: Column<RdTeamsRow>;
    Initial: Column<RdTeamsRow>;
}

export class RdTeamsColumns extends ColumnsBase<RdTeamsRow> {
    static readonly columnsKey = 'RDTeam.RdTeams';
    static readonly Fields = fieldsProxy<RdTeamsColumns>();
}