using Serenity.ComponentModel;
using Serenity.Data;
using Serenity.Data.Mapping;
using System.ComponentModel;

namespace RDCPanel.RDTeam;

[ConnectionKey("Default"), Module("RDTeam"), TableName("RDTeams")]
[DisplayName("Rd Teams"), InstanceName("Rd Teams")]
[ReadPermission("Administration:General")]
[ModifyPermission("Administration:General")]
[ServiceLookupPermission("Administration:General")]
public sealed class RdTeamsRow : Row<RdTeamsRow.RowFields>, IIdRow, INameRow
{
    [DisplayName("Id"), Identity, IdProperty]
    public int? Id { get => fields.Id[this]; set => fields.Id[this] = value; }

    [DisplayName("Name"), QuickSearch, NameProperty]
    public string Name { get => fields.Name[this]; set => fields.Name[this] = value; }

    [DisplayName("Job Title")]
    public string JobTitle { get => fields.JobTitle[this]; set => fields.JobTitle[this] = value; }

    [DisplayName("Department")]
    public string Department { get => fields.Department[this]; set => fields.Department[this] = value; }

    [DisplayName("Extension")]
    public string Extension { get => fields.Extension[this]; set => fields.Extension[this] = value; }

    [DisplayName("Email")]
    public string Email { get => fields.Email[this]; set => fields.Email[this] = value; }

    [DisplayName("Image")]
    [ImageUploadEditor(FilenameFormat = "RDTeam/{4}", CopyToHistory = false)]
  
    public string Image { get => fields.Image[this]; set => fields.Image[this] = value; }

    [DisplayName("Branch")]
    public string Branch { get => fields.Branch[this]; set => fields.Branch[this] = value; }

    [DisplayName("Initial")]
    public string Initial { get => fields.Initial[this]; set => fields.Initial[this] = value; }

    public class RowFields : RowFieldsBase
    {
        public Int32Field Id;
        public StringField Name;
        public StringField JobTitle;
        public StringField Department;
        public StringField Extension;
        public StringField Email;
        public StringField Image;
        public StringField Branch;
        public StringField Initial;

    }
}