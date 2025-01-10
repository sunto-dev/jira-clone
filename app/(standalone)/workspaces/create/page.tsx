import { getCurrent } from "@/features/auth/actions";
import { CreateWorkspaceForm } from "@/features/worksapaces/components/create-workspace-form";
import { redirect } from "next/navigation";

const WorkspaceCreatepage = async () => {
  const user = await getCurrent();
  if (!user) redirect("/sign-in");

  return (
    <div className="w-full lg:max-w-xl">
      <CreateWorkspaceForm />
    </div>
  );
};

export default WorkspaceCreatepage;
