"use client";
import { Project } from "@/actions/cfo/project.action";
import { DataTable } from "@/components/data-table";
import React, { useState } from "react";
import { ProjectsColumns } from "./columns";

export const ProjectsTable = () => {
  const [data, setData] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <DataTable columns={ProjectsColumns} data={data} />;
};