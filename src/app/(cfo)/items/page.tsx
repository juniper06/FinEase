import Layout from "@/components/Navbar";
import { } from "@/components/cfo/invoices/columns";
import { Items, itemsColumns } from "@/components/cfo/items/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

async function getData(): Promise<Items[]> {
  // Fetch data from your API here.
  return [
    {
      name: "Drawer",
      type: "Goods",
      description: "A spacious executive desk with storage drawers.",
      price: 10000,
    },
  ];
}

export default async function ItemsPage() {
  const data = await getData();

  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl w-full">
          All Items
        </h1>
        <Button className="flex gap-2 text-md" asChild>
          <Link href="/items/add-item">
            <CirclePlus className="h-6 w-6" />
            New
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable columns={itemsColumns} data={data} />
    </Layout>
  );
}