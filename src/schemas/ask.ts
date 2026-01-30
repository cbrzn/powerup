import { z } from "zod";

export const AskSchema = z.object({
  input: z.string(),
});

export const ResponseSchema = z.object({
  response: z.string(),
});
