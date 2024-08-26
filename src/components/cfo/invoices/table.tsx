"use client";
import { getAllCustomers } from "@/actions/customer.action";
import { getUserData } from "@/actions/user.action";
import { DataTable } from "@/components/data-table";
import { useToast } from "@/components/ui/use-toast";
import React, { useCallback, useEffect, useState } from "react";
import { Invoices, invoicesColumns } from "./columns";
import { getAllInvoices } from "@/actions/invoice.action";

export const InvoiceTable = () => {
  const [data, setData] = useState<Invoices[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [tableKey, setTableKey] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      const [invoices, customers] = await Promise.all([
        getAllInvoices(user.id),
        getAllCustomers(user.id),
      ]);

      const customerMap = customers.reduce((acc, customer) => {
        acc[customer.id] = `${customer.firstName} ${customer.lastName}`;
        return acc;
      }, {});

      const updatedInvoices = invoices.map((invoice) => ({
        ...invoice,
        customerName: customerMap[invoice.customerId], // Changed to customerName
      }));

      setData(updatedInvoices);
    } catch (error) {
      console.error("Failed to fetch invoices", error);
      toast({
        title: "Error",
        description: "Failed to fetch items. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id: string) => {
    const result = await deleteInvoice(id);
    if (result.success) {
      toast({
        title: "Success",
        description: "Invoice deleted successfully.",
      });
      await fetchData();
      setTableKey((prevKey) => prevKey + 1);
    } else {
      console.error("Failed to delete Invoice:", result.error);
      toast({
        title: "Error",
        description: result.error || "Failed to delete Invoice. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return <DataTable columns={invoicesColumns} data={data} />;
};