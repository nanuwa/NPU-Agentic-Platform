import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const uptimeTool: ToolDefinition = {
  name: "uptime",
  description: "Return Linux uptime",

  async execute() {
    const result = await CommandExecutor.run("uptime");

    return {
      success: result.success,
      message: "Linux uptime",
      data: {
        uptime: result.stdout
      }
    };
  }
};
