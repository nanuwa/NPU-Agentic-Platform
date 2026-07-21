import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const processTool: ToolDefinition = {
  name: "process",
  description: "Return running processes",

  async execute() {
    const result = await CommandExecutor.run("ps", ["-ef"]);

    return {
      success: result.success,
      message: "Running processes",
      data: {
        processes: result.stdout
      }
    };
  }
};
