import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const diskTool: ToolDefinition = {
  name: "disk",
  description: "Return disk usage",

  async execute() {
    const result = await CommandExecutor.run("df", ["-h"]);

    return {
      success: result.success,
      message: "Disk usage",
      data: {
        disk: result.stdout
      }
    };
  }
};
