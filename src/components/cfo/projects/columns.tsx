import { Project } from "@/actions/cfo/project.action";
import { formatDate } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export const ProjectsColumns: ColumnDef<Project>[] = [
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => (
      <Link href={`/projects/view-project/${row.original.id}`}>
        <div className="w-full h-full cursor-pointer">
          {formatDate(row.getValue("createdAt") as string)}
        </div>
      </Link>
    ),
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
    cell: ({ row }) => (
      <Link href={`/projects/view-project/${row.original.id}`}>
        <div className="w-full h-full cursor-pointer">
          {row.getValue("customerName")}
        </div>
      </Link>
    ),
  },
  {
    accessorKey: "projectName",
    header: "Project Name",
    cell: ({ row }) => (
      <Link href={`/projects/view-project/${row.original.id}`}>
        <div className="w-full h-full cursor-pointer">
          {row.getValue("projectName")}
        </div>
      </Link>
    ),
  },
  {
    accessorKey: "billingMethod",
    header: "Billing Method",
    cell: ({ row }) => (
      <Link href={`/projects/view-project/${row.original.id}`}>
        <div className="w-full h-full cursor-pointer">
          {row.getValue("billingMethod")}
        </div>
      </Link>
    ),
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      const project = row.original;
      const { onDelete } = table.options.meta as {
        onDelete: (id: string) => Promise<void>;
      };
      const [isAlertOpen, setIsAlertOpen] = useState(false);

      const handleDelete = async () => {
        await onDelete(project.id);
        setIsAlertOpen(false);
      };

      return (
        <>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setIsAlertOpen(true)}>
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete the
                  item.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDelete}>
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </>
      );
    },
  },
];