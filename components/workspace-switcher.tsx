"use client";
import { RiAddCircleFill } from "react-icons/ri";

import { useGetWorkspaces } from "@/features/worksapaces/api/use-get-workspaces";

export const WorkspaceSwitcher = () => {
  const { data } = useGetWorkspaces();

  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex flex-item-center justify-between">
        <p className="text-xs uppercase text-nuetral-500">Workspace</p>
        <RiAddCircleFill className="size-5 text-neutral-500 cursor-pointer hover:opacity-75 transition" />
      </div>
    </div>
  );
};
