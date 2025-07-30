interface APIResponse<T = any> {
  success: boolean;
  statusCode: number;
  message?: string;
  data?: T;
  meta?: Record<string, any>;
}
