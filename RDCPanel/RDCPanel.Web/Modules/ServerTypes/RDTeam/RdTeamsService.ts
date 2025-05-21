import { SaveRequest, SaveResponse, ServiceOptions, DeleteRequest, DeleteResponse, RetrieveRequest, RetrieveResponse, ListRequest, ListResponse, serviceRequest } from "@serenity-is/corelib";
import { RdTeamsRow } from "./RdTeamsRow";

export namespace RdTeamsService {
    export const baseUrl = 'RDTeam/RdTeams';

    export declare function Create(request: SaveRequest<RdTeamsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Update(request: SaveRequest<RdTeamsRow>, onSuccess?: (response: SaveResponse) => void, opt?: ServiceOptions<any>): PromiseLike<SaveResponse>;
    export declare function Delete(request: DeleteRequest, onSuccess?: (response: DeleteResponse) => void, opt?: ServiceOptions<any>): PromiseLike<DeleteResponse>;
    export declare function Retrieve(request: RetrieveRequest, onSuccess?: (response: RetrieveResponse<RdTeamsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<RetrieveResponse<RdTeamsRow>>;
    export declare function List(request: ListRequest, onSuccess?: (response: ListResponse<RdTeamsRow>) => void, opt?: ServiceOptions<any>): PromiseLike<ListResponse<RdTeamsRow>>;

    export const Methods = {
        Create: "RDTeam/RdTeams/Create",
        Update: "RDTeam/RdTeams/Update",
        Delete: "RDTeam/RdTeams/Delete",
        Retrieve: "RDTeam/RdTeams/Retrieve",
        List: "RDTeam/RdTeams/List"
    } as const;

    [
        'Create', 
        'Update', 
        'Delete', 
        'Retrieve', 
        'List'
    ].forEach(x => {
        (<any>RdTeamsService)[x] = function (r, s, o) {
            return serviceRequest(baseUrl + '/' + x, r, s, o);
        };
    });
}