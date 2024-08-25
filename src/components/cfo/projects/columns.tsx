import { Project } from "@/actions/cfo/project.action";

import { ColumnDef } from "@tanstack/react-table";







export const ProjectsColumns: ColumnDef<Project>[] = [

    {

        accessorKey: "customerName",

        header: "Customer Name"

    },

    {

        accessorKey: "projectName",

        header: "Project Name"

    },

    {

        accessorKey: "billingMethod",

        header: "Billing Method"

    },

]