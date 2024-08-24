import Layout from "@/components/Navbar";
import { Customer, customerColumns } from "@/components/cfo/customers/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from "lucide-react";
import Link from "next/link";


async function getData(): Promise<Customer[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "Juniper Gabriel",
      companyName: "GabbyQhan",
      email: "junipergabriel@example.com",
      phoneNumber: "12345678910",
    },
  ];
}

export default async function CustomerPage() {
  const data = await getData();

  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl w-full">All Customers</h1>
        <Button className="flex gap-2 text-md" asChild><Link href="/customers/add-customer"><CirclePlus className="h-6 w-6"/>New</Link></Button>
      </div>
      <Separator/>
      <DataTable columns={customerColumns} data={data} />
    </Layout>
  );
}