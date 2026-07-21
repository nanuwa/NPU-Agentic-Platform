import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const networkTool: ToolDefinition = {
  name: "network",
  description: "Return network interfaces",

  async execute() {
    const result = await CommandExecutor.run("ip", ["addr"]);

    return {
      success: result.success,
      message: "Network interfaces",
      data: {
        network: result.stdout
      }
    };
  }
};
