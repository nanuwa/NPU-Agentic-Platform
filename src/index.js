import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import * as z from "zod/v4";
const server = new McpServer({
    name: "system-mcp",
    version: "1.0.0",
});
server.registerTool("hostname", {
    description: "Return hostname",
    inputSchema: z.object({})
}, async () => ({
    content: [
        {
            type: "text",
            text: "Hello MCP"
        }
    ]
}));
const transport = new StdioServerTransport();
await server.connect(transport);
