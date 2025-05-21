import { fieldsProxy } from "@serenity-is/corelib";

export interface RdTeamsRow {
    Id?: number;
    Name?: string;
    JobTitle?: string;
    Department?: string;
    Extension?: string;
    Email?: string;
    Image?: string;
    Branch?: string;
    Initial?: string;
}

export abstract class RdTeamsRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'RDTeam.RdTeams';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<RdTeamsRow>();
}