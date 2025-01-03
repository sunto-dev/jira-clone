import { redirect } from "next/navigation";
import { getCurrent } from "../features/auth/actions";

import { CreateWorkspaceFormProps } from "@/app/features/worksapaces/components/create-workspace-form";

export default async function Home() {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return (
    <div className="bg-neutral-500 p-4 h-full">
      <CreateWorkspaceFormProps />
    </div>
  );
}
