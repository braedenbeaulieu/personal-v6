import { handlePing } from "./api/ping.ts";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/ping") {
      return handlePing();
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;