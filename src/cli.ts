import { ResponseSchema } from "./schemas/ask";

export const ask = async (prompt: string) => {
  const process = Bun.spawnSync([
    "codex",
    "exec",
    "--output-schema",
    `${import.meta.dir}/schemas/response.json`,
    prompt,
  ]);
  const response = await process.stdout.toString();
  const parsed = ResponseSchema.parse(JSON.parse(response));
  return parsed.response;
};
