import { z } from "zod";

export const createWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Required"),
  imageUrl: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});

export const UpdateWorkspaceSchema = z.object({
  name: z.string().trim().min(1, "Must be 1 or more characters").optional(),
  imageUrl: z
    .union([
      z.instanceof(File),
      z.string().transform((value) => (value === "" ? undefined : value)),
    ])
    .optional(),
});
