import { cookies } from "next/headers";
import { Databases, Client, Query, Account } from "node-appwrite";
import { AUTH_COOKIE } from "@/features/auth/constants";

import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";

export const getCurrent = async () => {
  try {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

    const session = await cookies().get(AUTH_COOKIE);

    if (!session) return null;

    client.setSession(session.value);
    const account = new Account(client);
    return await account.get();
  } catch {
    return null;
  }
};
