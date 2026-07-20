import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as z from "zod/v4";
const exec = promisify(execFile);
const server = new McpServer({
    name: "system-mcp",
    version: "1.0.0",
});
server.registerTool("hostname", {
    description: "Return hostname",
    inputSchema: z.object({})
}, async () => {
    const { stdout } = await exec("hostname");
    return {
        content: [
            {
                type: "text",
                text: stdout.trim()
            }
        ]
    };
});
const transport = new StdioServerTransport();
await server.connect(transport);
