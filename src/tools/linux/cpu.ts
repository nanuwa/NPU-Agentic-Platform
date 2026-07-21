import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const cpuTool: ToolDefinition = {
  name: "cpu",
  description: "Return CPU information",

  async execute() {
    const result = await CommandExecutor.run("lscpu");

    return {
      success: result.success,
      message: "CPU information",
      data: {
        cpu: result.stdout
      }
    };
  }
};
