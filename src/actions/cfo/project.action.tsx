use server";
import { useFetch } from "@/lib/fetch";

export async function addProject(values: any) {
  const response = await useFetch(`${process.env.SERVER_API}/project`, {
    method: "POST",
    body: JSON.stringify(values),
  });
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  return response.json();
}

export async function getAllProjects(userId: string) {
  const response = await useFetch(`${process.env.SERVER_API}/project`, {
    method: "GET",
  });
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  const projects = await response.json();
  return projects.filter(
    (project: { userId: string }) => project.userId === userId
  );
}

export async function getProject(id: string): Promise<Project | { error: string }> {
  const response = await useFetch(`${process.env.SERVER_API}/project/${id}`, {
    method: "GET",
  });

  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }

  if (response.status === 404) {
    return {
      error: "Project not found",
    };
  }

  const project = await response.json();
  return project;
}

export async function deleteProject(id: string) {
  try {
    const response = await useFetch(`${process.env.SERVER_API}/project/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      let errorMessage = "Failed to delete Project.";
      if (response.status === 404) {
        errorMessage = "Project not found.";
      } else {
        errorMessage = "Something went wrong.";
      }
      return {
        error: errorMessage,
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Network error. Please try again.",
    };
  }
}

export type Project = {
  id: string;
  projectName: string;
  projectCode: string;
  billingMethod: string;
  customerName: string;
  description: string;
  projectUsers: {
    userName: string;
    userEmail: string;
  }[];
  ProjectTasks: {
    taskName: string;
    taskDescription: string;
  }[];
};