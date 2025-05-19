using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ReactApp1.Server.Migrations
{
    /// <inheritdoc />
    public partial class updateBranchInit : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Branch",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true,
                defaultValue: "");


            migrationBuilder.AddColumn<string>(
                name: "Initial",
                table: "Employee",
                type: "nvarchar(max)",
                nullable: true,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Branch",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "Image",
                table: "Employee");

            migrationBuilder.DropColumn(
                name: "Initial",
                table: "Employee");
        }
    }
}
