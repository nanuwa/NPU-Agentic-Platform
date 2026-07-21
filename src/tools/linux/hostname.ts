import { CommandExecutor } from "../../core/CommandExecutor.js";
import { ToolDefinition } from "../../core/ToolTypes.js";

export const hostnameTool: ToolDefinition = {
  name: "hostname",
  description: "Return Linux hostname",

  async execute() {

    const result = await CommandExecutor.run("hostname");

    return {
      success: result.success,
      message: result.stdout,
      data: result
    };

  }

};
