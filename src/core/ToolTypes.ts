export interface ToolResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

export interface ToolDefinition {
  name: string;
  description: string;
  execute: () => Promise<ToolResponse>;
}
