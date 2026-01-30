import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dedent from "dedent";
import { ask } from "./cli";
import { bestPractices } from "./prompts";
import { AskSchema, ResponseSchema } from "./schemas/ask";

const server = new McpServer(
  {
    name: "senior-developer-consultant",
    version: "0.0.1",
  },
  { capabilities: { logging: {} } },
);

server.registerTool(
  "research-best-practices",
  {
    title: "Best practices researcher sub-agent",
    description: dedent`Use this agent when you need to research and gather external
    best practices, documentation, and examples for any technology,
    framework, or development practice. This includes finding official documentation,
    community standards, well-regarded examples from open source projects, and
    domain-specific conventions. The agent excels at synthesizing information from
    multiple sources to provide comprehensive guidance on how to implement features
    or solve problems according to industry standards.`,
    inputSchema: AskSchema,
    outputSchema: ResponseSchema,
  },
  async ({ input }) => {
    const response = await ask(`${bestPractices}\nUser question: ${input}`);

    return {
      content: [
        {
          type: "text" as const,
          text: response,
        },
      ],
    };
  },
);


await server.connect(new StdioServerTransport());
