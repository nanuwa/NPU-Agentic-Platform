import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

export class CommandExecutor {
  static async run(command: string, args: string[] = []) {
    try {
      const { stdout, stderr } = await exec(command, args);

      return {
        success: true,
        stdout: stdout.trim(),
        stderr: stderr.trim()
      };
    } catch (error) {
      return {
        success: false,
        stdout: "",
        stderr: String(error)
      };
    }
  }
}
