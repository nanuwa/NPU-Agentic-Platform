import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const whoamiTool: ToolDefinition = {
  name: "whoami",
  description: "Return current user",

  async execute() {
    const result = await CommandExecutor.run("whoami");

    return {
      success: result.success,
      message: "Current user",
      data: {
        user: result.stdout
      }
    };
  }
};
