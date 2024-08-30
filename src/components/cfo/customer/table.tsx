"use client"
import { getAllCustomers } from "@/actions/customer.action";
import { getUserData } from "@/actions/user.action";
import { DataTable } from "@/components/data-table";
import { useToast } from "@/components/ui/use-toast";
import React, { useCallback, useEffect, useState } from "react";
import { Customers, customerColumns } from "./columns";

export const CustomerTable = () => {
  const [data, setData] = useState<Customers[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const [tableKey, setTableKey] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const user = await getUserData();
      const customers = await getAllCustomers(user.id);
      setData(customers);
    } catch (error) {
      console.error("Failed to fetch customers", error);
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return <DataTable columns={customerColumns} data={data}/>;
};