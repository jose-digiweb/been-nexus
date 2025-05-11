/// <reference types="@cloudflare/workers-types/2023-07-01" />

declare module 'h3' {
  interface H3EventContext {
    cf: CfProperties;
    cloudflare: {
      request: Request;
      env: {
        DB: D1Database;
        ASSETS: Fetcher;
      };
      context: ExecutionContext;
    };
  }
}

export {};
