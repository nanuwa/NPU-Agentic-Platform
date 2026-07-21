import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const memoryTool: ToolDefinition = {
  name: "memory",
  description: "Return memory usage",

  async execute() {
    const result = await CommandExecutor.run("free", ["-h"]);

    return {
      success: result.success,
      message: "Memory usage",
      data: {
        memory: result.stdout
      }
    };
  }
};
